import ByteBuffer from "bytebuffer";

import { TransactionType, TransactionTypeGroup } from "../../../enums";
import { Address } from "../../../identities";
import { ISerializeOptions } from "../../../interfaces";
import { BigNumber } from "../../../utils/bignum";
import * as schemas from "../schemas";
import { Transaction } from "../transaction";

export abstract class TransferTransaction extends Transaction {
    public static typeGroup: number = TransactionTypeGroup.Core;
    public static type: number = TransactionType.Transfer;
    public static key = "transfer";
    public static version: number = 1;

    protected static defaultStaticFee: BigNumber = BigNumber.make("10000000");

    public static getSchema(): schemas.TransactionSchema {
        return schemas.transfer;
    }

    public hasVendorField(): boolean {
        return true;
    }

    public serialize(options?: ISerializeOptions): ByteBuffer | undefined {
        const { data } = this;
        const buffer: ByteBuffer = new ByteBuffer(24, true);
        // @ts-ignore - The ByteBuffer types say we can't use strings but the code actually handles them.
        buffer.writeUint64(data.amount.toString());
        buffer.writeUint32(data.expiration || 0);

        if (data.recipientId) {
            const { addressBuffer, addressError } = Address.toBuffer(data.recipientId);

            if (options) {
                options.addressError = addressError;
            }

            buffer.append(addressBuffer);
        }

        return buffer;
    }

    public deserialize(buf: ByteBuffer): void {
        const { data } = this;
        data.amount = BigNumber.make(buf.readUint64().toString());
        data.expiration = buf.readUint32();
        data.recipientId = Address.fromBuffer(buf.readBytes(21).toBuffer());
    }
}
