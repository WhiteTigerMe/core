import "jest-extended";

import { Wallet, WalletRepository, WalletRepositoryClone } from "@packages/core-state/src/wallets";
import {
    addressesIndexer,
    ipfsIndexer,
    locksIndexer,
    publicKeysIndexer,
    resignationsIndexer,
    usernamesIndexer,
} from "@packages/core-state/src/wallets/indexers/indexers";
import { Utils } from "@packages/crypto/src";

import { setUp } from "../setup";

let walletRepoClone: WalletRepositoryClone;
let walletRepo: WalletRepository;

beforeAll(async () => {
    const initialEnv = await setUp();
    walletRepoClone = initialEnv.walletRepoClone;
    walletRepo = initialEnv.walletRepo;
});

beforeEach(() => {
    walletRepoClone.reset();
    walletRepo.reset();
});

describe("Wallet Repository Clone", () => {
    it("should create a wallet", () => {
        const wallet = walletRepoClone.createWallet("abcd");

        expect(wallet.address).toEqual("abcd");
        expect(wallet).toBeInstanceOf(Wallet);
    });

    it("should be able to look up indexers", () => {
        const expected = ["addresses", "publicKeys", "usernames", "resignations", "locks", "ipfs"];
        expect(walletRepoClone.getIndexNames()).toEqual(expected);
        expect(walletRepoClone.getIndex("addresses").indexer).toEqual(addressesIndexer);
        expect(walletRepoClone.getIndex("publicKeys").indexer).toEqual(publicKeysIndexer);
        expect(walletRepoClone.getIndex("usernames").indexer).toEqual(usernamesIndexer);
        expect(walletRepoClone.getIndex("resignations").indexer).toEqual(resignationsIndexer);
        expect(walletRepoClone.getIndex("locks").indexer).toEqual(locksIndexer);
        expect(walletRepoClone.getIndex("ipfs").indexer).toEqual(ipfsIndexer);
    });

    // TODO: test behaves differently to WalletRepository due to inheritance
    it.skip("findByPublicKey should index", () => {
        const address = "ATtEq2tqNumWgR9q9zF6FjGp34Mp5JpKGp";
        const wallet = walletRepoClone.createWallet(address);
        const publicKey = "03720586a26d8d49ec27059bd4572c49ba474029c3627715380f4df83fb431aece";
        wallet.publicKey = publicKey;

        expect(walletRepoClone.findByAddress(address)).not.toEqual(wallet);
        walletRepoClone.getIndex("publicKeys").set(publicKey, wallet);
        expect(walletRepoClone.findByPublicKey(publicKey).publicKey).toBeDefined();
        expect(walletRepoClone.findByPublicKey(publicKey)).toEqual(wallet);

        /**
         * TODO: check this is desired behaviour?
         * TempWalletRepository calls index inside findByPublicKey (unlike WalletRepository).
         * This has the effect that these are now defined without needing to index
         */
        expect(walletRepoClone.findByAddress(address).publicKey).toBeDefined();
        expect(walletRepoClone.findByAddress(address)).toEqual(wallet);
    });

    // TODO: test behaves differently to WalletRepository due to inheritance
    it.skip("should not retrieve wallets indexed in original repo, until they are indexed", () => {
        const address = "abcd";

        const wallet = walletRepoClone.createWallet(address);
        walletRepoClone.index(wallet);

        /**
         * TODO: check this is desired behaviour
         * has, hasByAddress and hasByIndex all behave differently because of the problem of inheritance.
         * I've added has and hasByIndex to TempWalletRepo to fix this (i.e. these should all return false, not just one of them), but in general this architecture needs revisiting.
         */
        expect(walletRepoClone.has(address)).toBeFalse();
        expect(walletRepoClone.hasByAddress(address)).toBeFalse();
        expect(walletRepoClone.hasByIndex("addresses", address)).toBeFalse();
        /**
         *  For example, because allByAddress is *not* overwritten in TempWalletRepo, this falls back to the WalletRepo base class which returns the wallet, despite hasByAddress being false.
         *
         * We can add all these different methods to TempWalletRepository to make the class behave more sensibly. However, if these methods aren't intended to ever really be called on the temporary version of the wallet repository it makes sense to use a shared base interface, rather than using inheritance.
         *
         * IMO inheritance should be used very sparingly, as it is often difficult to reason about, and calling methods have side effects the calling code may not expect.
         */
        expect(walletRepoClone.allByAddress()).toEqual([wallet]);

        walletRepo.index(wallet);

        expect(walletRepoClone.has(address)).toBeTrue();
        expect(walletRepoClone.hasByAddress(address)).toBeTrue();
        expect(walletRepoClone.hasByIndex("addresses", address)).toBeTrue();
        expect(walletRepoClone.allByAddress()).toEqual([wallet]);

        // TODO: similarly, this behaviour is odd - as the code hasn't been overwritten in the extended class
        expect(walletRepoClone.has(address)).toBeTrue();
    });

    // TODO: test behaves differently to WalletRepository due to inheritance
    it.skip("should create a wallet if one is not found during address lookup", () => {
        expect(() => walletRepoClone.findByAddress("hello")).not.toThrow();
        expect(walletRepoClone.findByAddress("iDontExist")).toBeInstanceOf(Wallet);
        expect(walletRepoClone.has("hello")).toBeFalse();
        expect(walletRepoClone.hasByAddress("iDontExist")).toBeFalse();

        /**
         * TODO: check this is desired behaviour
         * WalletRepo throws here, TempWalletRepo does not.
         */
        expect(() => walletRepoClone.findByIndex("addresses", "iAlsoDontExist")).not.toThrow();
    });

    describe("indexing", () => {
        it("should index wallet", () => {
            const wallet1 = walletRepoClone.createWallet("wallet1");
            walletRepoClone.index(wallet1);

            expect(walletRepoClone.findByAddress("wallet1")).toBe(wallet1);
        });

        it("should index array of wallets", () => {
            const wallet1 = walletRepoClone.createWallet("wallet1");
            const wallet2 = walletRepoClone.createWallet("wallet2");
            walletRepoClone.index([wallet1, wallet2]);

            expect(walletRepoClone.findByAddress("wallet1")).toBe(wallet1);
            expect(walletRepoClone.findByAddress("wallet2")).toBe(wallet2);
        });

        it("should re-index wallet", () => {
            const wallet = walletRepo.createWallet("abcdef");
            walletRepo.index(wallet);
            const clone = wallet.clone();
            walletRepoClone.index(clone);

            expect(walletRepoClone.findByAddress("abcdef")).toBe(clone);
        });

        it("should throw error when attempting to index state=blockchain wallet", () => {
            const wallet = walletRepo.createWallet("abcdef");
            walletRepo.index(wallet);

            expect(() => walletRepoClone.index(wallet)).toThrowError("Can't index state=blockchain wallet");
        });
    });

    describe("findByAddress", () => {
        it("should return a copy", () => {
            const wallet = walletRepo.createWallet("abcdef");
            walletRepo.index(wallet);

            const tempWallet = walletRepoClone.findByAddress(wallet.address);
            tempWallet.balance = Utils.BigNumber.ONE;

            expect(wallet.balance).not.toEqual(tempWallet.balance);
        });
    });

    describe("findByPublickey", () => {
        it("should return a copy", () => {
            const wallet = walletRepo.createWallet("ATtEq2tqNumWgR9q9zF6FjGp34Mp5JpKGp");
            wallet.publicKey = "03720586a26d8d49ec27059bd4572c49ba474029c3627715380f4df83fb431aece";
            wallet.balance = Utils.BigNumber.SATOSHI;
            walletRepo.index(wallet);

            const tempWallet = walletRepoClone.findByPublicKey(wallet.publicKey);
            tempWallet.balance = Utils.BigNumber.ZERO;

            expect(wallet.balance).toEqual(Utils.BigNumber.SATOSHI);
            expect(tempWallet.balance).toEqual(Utils.BigNumber.ZERO);
        });
    });

    // TODO: test behaves differently to WalletRepository due to inheritance
    describe.skip("findByUsername", () => {
        it("should return a copy", () => {
            const wallet = walletRepo.createWallet("abcdef");
            wallet.setAttribute("delegate", { username: "test" });
            walletRepo.index(wallet);

            const tempWallet = walletRepoClone.findByUsername(wallet.getAttribute("delegate.username"));
            tempWallet.balance = Utils.BigNumber.ONE;

            expect(wallet.balance).not.toEqual(tempWallet.balance);
        });
    });

    // TODO: test behaves differently to WalletRepository due to inheritance
    describe.skip("hasByAddress", () => {
        it("should be ok", () => {
            const wallet = walletRepo.createWallet("abcdef");
            walletRepo.index(wallet);

            expect(walletRepoClone.hasByAddress(wallet.address)).toBeTrue();
        });
    });

    // TODO: test behaves differently to WalletRepository due to inheritance
    describe.skip("hasByPublicKey", () => {
        it("should be ok", () => {
            const wallet = walletRepo.createWallet("ATtEq2tqNumWgR9q9zF6FjGp34Mp5JpKGp");
            wallet.publicKey = "03720586a26d8d49ec27059bd4572c49ba474029c3627715380f4df83fb431aece";
            walletRepo.index(wallet);

            expect(walletRepoClone.hasByPublicKey(wallet.publicKey)).toBeTrue();
        });
    });

    // TODO: test behaves differently to WalletRepository due to inheritance
    describe.skip("hasByUsername", () => {
        it("should be ok", () => {
            const wallet = walletRepo.createWallet("abcdef");
            wallet.setAttribute("delegate", { username: "test" });
            walletRepo.index(wallet);

            expect(walletRepoClone.hasByUsername(wallet.getAttribute("delegate.username"))).toBeTrue();
        });
    });
});
