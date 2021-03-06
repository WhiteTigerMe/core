# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2020-XX-XX

### Added

-   Implement `Queue#isRunning/isStarted/onDrain/onError/onData` methods ([d8076847], [@sebastijankuzner])
-   Transform comma query into array to allow OR ([0a69f659], [@air1one])
-   Unvote+vote transaction ([700b9cd6], [@rainydio])
-   Wallet autoIndex option ([51d01a2d], [@sebastijankuzner])
-   Implement peer blacklisting ([f18928dd], [@sebastijankuzner])
-   Split into 3 ports for blocks / transactions / others ([9796d138], [@air1one])
-   Enable registering routes with pagination ([47d3cf20], [@sebastijankuzner])
-   Add block and transactions indexes migration ([b42bfb6f], [@sebastijankuzner])
-   Forget unresponsive peer ([5222b5cf], [@sebastijankuzner])
-   Include estimateTotalCount into peers response ([ed8a0e80], [@sebastijankuzner])
-   Disable individual watchers ([e943e563], [@sebastijankuzner])
-   Set up aip36 milestone to enable entity transactions ([d9fc0c09], [@air1one])
-   Implement database query support ([8a2033ac], [@sebastijankuzner])
-   Dispatch wallet events ([7cb916ab], [@sebastijankuzner])
-   Implement AIP36 ([ce618cc3], [@air1one])
-   Dispatch schedule events ([cc707383], [@sebastijankuzner])
-   Dispatch queue events ([9ac9b453], [@sebastijankuzner])
-   Implement `info.lastForgedBlock` action ([6f9887f9], [@sebastijankuzner])
-   Dispatch webhook events ([7ca7d968], [@sebastijankuzner])
-   Implement `watcher.getEvents` action ([4757531e], [@sebastijankuzner])
-   Implement log watcher ([1bfc528a], [@sebastijankuzner])
-   Disaptch additional transaction-pool events ([4190ed63], [@sebastijankuzner])
-   Implements DatabaseLogger ([1c968188], [@sebastijankuzner])
-   Implement events listener and events database ([29672aa9], [@sebastijankuzner])
-   Implement `info.nextForgingSlot` action ([d204f752], [@sebastijankuzner])
-   Implement workers ([d70c4227], [@rainydio])
-   Implements `forger.nextSlot` process actions ([6dacdfbb], [@sebastijankuzner])
-   Implement `info.currentDelegate` action ([85287670], [@sebastijankuzner])
-   Implement `snapshots.restore` action ([bd0370e3], [@sebastijankuzner])
-   Implements `forger.lastForgedBlock` process actions ([97746d0c], [@sebastijankuzner])
-   Implement trigger method in ProcessManager ([cf8a401b], [@sebastijankuzner])
-   EstimateTotalCount API parameter ([c52b6ab7], [@rainydio])
-   Implement `snapshots.list` action ([7a8bb932], [@sebastijankuzner])
-   Implements `forger.currentDelegate` process action ([052aae85], [@sebastijankuzner])
-   Implement `snapshots.delete` action ([f87e146f], [@sebastijankuzner])
-   Implement `snapshots.create` action ([82382fc9], [@sebastijankuzner])
-   Implement process actions ([1cb7e23e], [@sebastijankuzner])
-   Implement `log.log` action ([fa49ca80], [@sebastijankuzner])
-   Implement `log.archived` action ([10e82175], [@sebastijankuzner])
-   Implement `configuration.updatePlugins` action ([36a607ab], [@sebastijankuzner])
-   Implement `configuration.updateEnv` action ([ca28f66f], [@sebastijankuzner])
-   Implement `configuration.getPlugins` action ([dcfff76d], [@sebastijankuzner])
-   Implement `configuration.getEnv` action ([ef450f9d], [@sebastijankuzner])
-   Count estimation ([118be7ba], [@rainydio])
-   Implement `process.list` action ([f31109fc], [@sebastijankuzner])
-   Implement `process.stop` action ([7db01265], [@sebastijankuzner])
-   Implement `process.start` action  ([c8fdde97], [@sebastijankuzner])
-   Implement `process.restart` action ([3559f71e], [@sebastijankuzner])
-   Implement `info.databaseSize` action ([f28ba8db], [@sebastijankuzner])
-   Implement `info.diskSpace` action ([67cd2c67], [@sebastijankuzner])
-   Implement `info.blockchainHeight` action ([9c20c02e], [@sebastijankuzner])
-   Implement `info.coreStatus` action ([40ddab0d], [@sebastijankuzner])
-   Implement `info.coreVersion` action ([4ef29686], [@sebastijankuzner])
-   Feat(core-manager) implement token authentication ([81ebb949], [@sebastijankuzner])
-   Implement basic authentication ([c3042577], [@sebastijankuzner])
-   Implement IP whitelisting ([9894e9ab], [@sebastijankuzner])
-   Implement core-manager skeleton ([fed54c9d], [@sebastijankuzner])
-   Implement core-snapshots package ([8df596ab], [@sebastijankuzner])
-   Dynamic block times ([084b3962], [@bertiespell])
-   Hapi/nes implementation ([4ff97a26], [@air1one])
-   Integrate triggers and actions ([0d5390fd], [@sebastijankuzner])
-   Add reusable mocks from tests ([a82a0943], [@sebastijankuzner])
-   Transaction to string method ([4999fec6], [@rainydio])
-   Initial draft implementation of pluggable CLI ([8465625e], [@faustbrian])
-   Ioc tags ([ff8975a0], [@rainydio])
-   Allow use of custom crypto configuration ([84aee929], [@faustbrian])
-   Allow extension of cache and queue service ([daadf358], [@faustbrian])
-   Manual registration of service providers and configuration options ([460c6faa], [@faustbrian])
-   Versioned transaction types ([ae6cab5d], [@supaiku])
-   Support modifiers in transaction factories ([5191f699], [@faustbrian])
-   Implement peer factory ([cded589b], [@faustbrian])
-   Implement transaction factories ([c7606208], [@faustbrian])
-   Implement null drivers ([dd83c08b], [@faustbrian])
-   Initial draft implementation ([a636dfd3], [@faustbrian])
-   Dispatch cache events ([c4a8b70d], [@faustbrian])
-   Implement in-memory logger as default ([a116e3f0], [@faustbrian])
-   Implement block factory ([5a5b3d7f], [@faustbrian])
-   Implement transfer factory ([de75e6ea], [@faustbrian])
-   Implement peer factory ([e323bb50], [@faustbrian])
-   Make roundInfo optional in databaseService.getActiveDelegates() ([6e59a43d], [@supaiku])
-   Add ports to bridgechain registration/update ([7fc356c7], [@supaiku])
-   Add command to clear transaction pool ([6d6b6d33], [@supaiku])
-   Implement Address.fromWIF method ([193417e1], [@supaiku])
-   Filter locks by expiration status ([a0096ffe], [@supaiku])
-   Ensure unique genesisHash per bridgechain  ([bdb7f946], [@supaiku])
-   Add `isExpired` property to locks response ([2f734e4f], [@supaiku])
-   Include business asset in wallet transformer ([7cf1b107], [@supaiku])
-   Add additional fields to bridgechains search sc… ([34b7e34e], [@supaiku])
-   Implement throttling on outgoing p2p communication ([03c2ea3b], [@supaiku])
-   Add additional fields to businesses search sche… ([1b7d90ac], [@supaiku])
-   Ensure unique bridgechain name per business ([cfda8572], [@supaiku])
-   Implement businesses/bridgechains endpoint ([b337cbe3], [@supaiku])
-   Add round and forger tracker ([044ca830], [@faustbrian])
-   Implement rate-limiter-flexible plugin ([cb50a622], [@faustbrian])
-   Validate the application configuration ([3f62bb54], [@faustbrian])
-   Implement pipeline service ([be252260], [@faustbrian])
-   Allow enabling/disabling log methods ([292d9e84], [@faustbrian])
-   Introduce process specific application configurations ([1a4e1320], [@faustbrian])
-   Add service provider events ([00f4964b], [@faustbrian])
-   Implement factories and generators ([bb91fab5], [@faustbrian])
-   Implement assertion utilities ([47275d67], [@faustbrian])
-   Add flush methods for attributes ([5c404b69], [@faustbrian])
-   Get dependencies and required state from manifest ([95a787c2], [@faustbrian])
-   Implement plugin aliases ([213b71a1], [@faustbrian])
-   Support numerical and reference keys for attributes ([c53f6f52], [@faustbrian])
-   Scoped attribute indexes ([c78e5611], [@faustbrian])
-   Install plugins from local tarballs ([8f7d0d31], [@faustbrian])
-   Initial draft implementation (non-functional) ([2d5ea1aa], [@faustbrian])
-   Install, update and remove plugins ([3753b290], [@faustbrian])
-   Load crypto configuration from directory ([b37233e3], [@faustbrian])
-   Allow CLI command configurations ([ad5e8230], [@faustbrian])
-   Initial draft of attributes service ([08ca0fac], [@faustbrian])
-   Implement app config to configure log service ([dd4c9aba], [@faustbrian])
-   Initial draft of mixin service ([0367e8e1], [@faustbrian])
-   Initial draft of queues ([5e5eb2a4], [@faustbrian])
-   Schedule tasks by cron or block intervals ([cfd39d08], [@faustbrian])
-   Watch configuration and restart core on change ([344de61a], [@faustbrian])
-   Initial draft of new container ([583f5a92], [@faustbrian])
-   Initial draft of actions ([1a823ee7], [@faustbrian])
-   Implement reusable exceptions ([75c11774], [@faustbrian])
-   Auto-discovery for package manifest and config ([d449340c], [@faustbrian])
-   Ability to listen to bootstrapping events ([bf422244], [@faustbrian])
-   Support creation of scoped child containers ([9d12bb1f], [@faustbrian])
-   Validate and cast package configuration on register ([ade3a5d4], [@faustbrian])
-   Required plugins to terminate on registration failure ([d44e29cc], [@faustbrian])
-   Validation service ([1de4f3fc], [@faustbrian])
-   Add relay:share command to share relay instances via ngrok ([42b0805c], [@faustbrian])
-   Handle inclusion and exclusion of service providers ([fc157999], [@faustbrian])
-   Conditional enabling and disabling of services ([77893fda], [@faustbrian])
-   Implement builder pattern to support driver-based plugins ([9b368c95], [@faustbrian])
-   Filesystem abstraction ([0f7e589b], [@faustbrian])
-   Application and service provider bootstrappers ([85b6b605], [@faustbrian])
-   Initial draft of cache ([3c413d43], [@faustbrian])
-   Initial draft of event dispatcher ([5d96cbfc], [@faustbrian])
-   Initial draft of scheduler ([a399f194], [@faustbrian])
-   Initial draft of core-kernel ([f47b55c8], [@faustbrian])

### Changed

-   Fire wallet events ([2c43f6c6], [@rainydio])
-   Allow array query parameter in all schemas ([a13bf618], [@air1one])
-   Force typeorm version 0.2.25 ([e8000a63], [@air1one])
-   Remove import from dist or src ([6e969dd1], [@air1one])
-   Remove search endpoints ([deb2cd78], [@air1one])
-   3.0 docker updates ([6ff40720], [@adrian69])
-   Extend /node/fees and /transactions/fees with entities static fees ([773eb8ce], [@air1one])
-   Do not bind directly handler to class method to allow extending response ([bab1d914], [@air1one])
-   CloneWallet method in wallet-repository ([d0775fdc], [@sebastijankuzner])
-   Ts-ignore ([feb1970e], [@air1one])
-   Lint ([24b164b1], [@air1one])
-   Use deepmerge for plugin configuration ([77719976], [@sebastijankuzner])
-   Add indexers export ([437f8cfd], [@air1one])
-   Wallet repository search methods ([17fcaf37], [@rainydio])
-   Add exports for bridgechains ([a27b6c3f], [@air1one])
-   Set maxPayload on ws server ([bf892b53], [@sebastijankuzner])
-   Include missing dependencies in package.json ([6bb4fedd], [@sebastijankuzner])
-   Export state-builder ([ae160d6e], [@air1one])
-   Add publickey verification ([44088992], [@sleepdefic1t])
-   Initialize blockchain when resolved first time ([3f8727b2], [@rainydio])
-   Remove forget methods and use index instead ([9a6358a5], [@sebastijankuzner])
-   Dot-separated-query hapi plugin ([d6803913], [@rainydio])
-   Pagination configuration through joi context ([8ebf8218], [@rainydio])
-   Put configuration into Joi context ([0ff67a96], [@rainydio])
-   Keep process var over .env var ([640b9a1a], [@sebastijankuzner])
-   Get registered server route ([08d8c936], [@sebastijankuzner])
-   Use HEAD HTTP request for ping ([fcbe909b], [@sebastijankuzner])
-   Add 3.0.0 alpha channel to valid peer versions ([f2da0bd8], [@air1one])
-   Trigger processes from ark-core or ark-forger ([f00e075d], [@sebastijankuzner])
-   BlocksInCurrentRound and forgingDelegates are arrays ([50ce984e], [@sebastijankuzner])
-   Remove excess code from hapi-nes ([f0fe8b93], [@sebastijankuzner])
-   Remove obsolete matchers package from merge ([76e9317a], [@air1one])
-   Bump xstate ([0601aea4], [@air1one])
-   Ts ignore ([c03c2dcf], [@air1one])
-   Upload codecov reports all at once ([60624a3f], [@rainydio])
-   Union query typeGroup with number ([1a81aee4], [@rainydio])
-   Skip verification of transactions sent from multisignature wallets ([fcde9544], [@sebastijankuzner])
-   Remove app.events and all of its usages ([35ef5926], [@rainydio])
-   Remove app.log and all of its usages ([bccf74d2], [@rainydio])
-   Copy over `@hapi/nes` with forked code ([5700867d], [@air1one])
-   Process blocks log line ([4e685146], [@rainydio])
-   Upgrade typeorm and pg packages ([daf4bb48], [@rainydio])
-   Use shorter default timeouts ([f4025bbc], [@alessiodf])
-   Better locking ([f0acce87], [@rainydio])
-   Remove custom wallet repository ([bb8cb129], [@rainydio])
-   (core-transaction-pool): better readd log ([d65c9de3], [@rainydio])
-   Log milestone change ([cecf8929], [@rainydio])
-   Fix configuration and plugin actions ([d0650b1a], [@sebastijankuzner])
-   Update nsfw 2.0.0 to support node.js 14 ([5ef81ef7], [@rainydio])
-   `getPeerConfig` return plugins information ([a1246552], [@air1one])
-   Support fedora ([a29466e8], [@alessiodf])
-   Update bcrypto dependency ([c74e4ca7], [@sebastijankuzner])
-   CentOS install fixes ([8bd81173], [@adrian69])
-   Refactor(core-snapshot) improve snapshotService interface ([312a1a71], [@sebastijankuzner])
-   Enable assumeChangesOnlyAffectDirectDependencies for TypeScript ([027c6dec], [@faustbrian])
-   Use `export * as ns` syntax ([04436877], [@faustbrian])
-   Block and transaction history services ([2038cd5a], [@rainydio])
-   Update dependencies and apply formatting ([e6d579d6], [@faustbrian])
-   Remove core-utils package ([e428af25], [@faustbrian])
-   Merge index and reindex into one function inside WalletRepository ([af2d8dcf], [@bertiespell])
-   Resolve merge conflicts ([27813b35], [@faustbrian])
-   Segregate pools by wallets ([2aca6e17], [@rainydio])
-   Define default value for maxTransactionBytes ([77e03662], [@air1one])
-   Bump hapi/joi version to 17.1.0 ([d9b8bc56], [@air1one])
-   Fix lint issues ([68f13e6c], [@air1one])
-   Fix typescript errors ([0d726edf], [@air1one])
-   Setup Wallaby.js configuration ([ac0c0fef], [@rainydio])
-   Transaction broadcaster ([8fc18c1a], [@rainydio])
-   Processor and errors ([acf34236], [@rainydio])
-   Wallet repositories ([b87899a5], [@rainydio])
-   Storage ([c558ddde], [@rainydio])
-   Add symbol for TransactionHandlerProvider ([5834847a], [@sebastijankuzner])
-   Htlc-lock recipient ([03b51cc6], [@rainydio])
-   Use ioc for wallet repository indexes ([2eb295d5], [@rainydio])
-   Add ability to inject plugin configuration ([d4acdfe2], [@rainydio])
-   Collator service ([319f778c], [@rainydio])
-   Use wallet repositort with `state=temp` tag instead of temp repository ([1d10acf5], [@rainydio])
-   Tagged pool wallet repository usages state=pool ([f2a5852a], [@rainydio])
-   Added state=blockchain tag to wallet repository and handler repository references ([72440be8], [@rainydio])
-   Lifting singleton from transaction handler registry ([35710668], [@rainydio])
-   Stricter eslint configuration ([88219cfd], [@faustbrian])
-   Change handler dependency handling ([b51793a6], [@rainydio])
-   IoC TransactionHandlerRegistry ([c11af3a1], [@rainydio])
-   Take voteBalance updates out of apply/revert block functions ([e69e33c0], [@rainydio])
-   Resolve various circular dependencies ([c84b9766], [@faustbrian])
-   Update TypeORM to support PG12 ([905cac2f], [@faustbrian])
-   Adjust to new infrastructure ([cad34570], [@faustbrian])
-   Setup madge to detect circular dependencies ([82623ff7], [@faustbrian])
-   Adjust to new infrastructure ([8482282a], [@faustbrian])
-   Update dependencies ([dc68c251], [@faustbrian])
-   Expect actions, jobs and event listeners to be classes ([84c47884], [@faustbrian])
-   Create a real block via block factory ([5a82211f], [@faustbrian])
-   Create a real wallet via wallet factory ([838ca5de], [@faustbrian])
-   Expose queue service through a factory pattern ([4f3e8dce], [@faustbrian])
-   Expose pipeline service through a factory pattern ([6529b133], [@faustbrian])
-   Expose cache service through a factory pattern ([3eab947d], [@faustbrian])
-   Expose internals for extension ([243f0bca], [@faustbrian])
-   Update @hapi dependencies ([1e489b06], [@faustbrian])
-   Remove until a proper rewrite ([f67c9137], [@faustbrian])
-   Adjust to new infrastructure ([a7f3d03e], [@faustbrian])
-   Adjust to new infrastructure ([f93a9118], [@faustbrian])
-   Decouple wallet entity from container ([b3aab122], [@faustbrian])
-   Flatten contract namespace ([5c3afa4a], [@faustbrian])
-   Clearly separate event enums by type ([a9241c6c], [@faustbrian])
-   Rename ActionService to TriggerService ([148e98f1], [@faustbrian])
-   Better handling Debian/Ubuntu derivatives NodeJS install ([d8931255], [@supaiku])
-   Handle Debian/Ubuntu derivate NodeJS install ([9d8de5de], [@supaiku])
-   Set minimum fee on transaction types ([53cb5c4f], [@supaiku])
-   Set transactionBaseSchema fee minimum to 0 ([169170e5], [@supaiku])
-   More verbose static fee mismatch error ([218555a3], [@supaiku])
-   Use transactionId ref in lockTransactionId schema definition ([1f5aee46], [@supaiku])
-   Add schema for orderBy query param ([166b1dac], [@supaiku])
-   Adjust generic name schema ([39455227], [@supaiku])
-   Make deserializers static ([c5b5301b], [@supaiku])
-   Move verifySignatures into Transactions.Verifier ([0cb6ba01], [@supaiku])
-   Validate expiration type based on enum ([f471dd97], [@supaiku])
-   Unique ipfs hashes ([b1efd04c], [@supaiku])
-   Require static fee ([bd573137], [@supaiku])
-   Remove misleading order by expirationValue ([168c0c79], [@supaiku])
-   More restrictive wallet id schema ([905b8d22], [@supaiku])
-   Use URI schema for website an… ([55a8bbb5], [@supaiku])
-   Improve log message ([0acd17fd], [@supaiku])
-   Update multipayment limits ([e516c544], [@supaiku])
-   Change MaximumPaymentCountExceededError error ([d5d9b983], [@supaiku])
-   Use 4 bytes instead of 8 byte… ([ea195e2b], [@supaiku])
-   Don't allow multiple business or bri… ([8e5475d9], [@supaiku])
-   Remove redundant bridgechain sc… ([317a89fe], [@lemii])
-   Convert htlc lock vendorfield to string during bootstrap ([1d9dd821], [@dated])
-   Consolidate bridgechain schem… ([c08d15d4], [@supaiku])
-   BridgechainUpdate errors ([8d8bb74f], [@lemii])
-   Use multiPaymentLimit from milestone if avail… ([7510239e], [@supaiku])
-   Refactor searchBusinesses & searchBridgechains ([43ce7dd4], [@dated])
-   Overwrite arrays when merging milestones ([d7e895c0], [@dated])
-   Update docker to node.js 12 ([c88c3325], [@adrian69])
-   Format timestamp of locks ([b96bb497], [@dated])
-   Print more details in log messages ([f961d053], [@vasild])
-   Sort peers by height, latency ([4a9afb4a], [@dated])
-   Migrate to TypeORM ([c91073ee], [@supaiku])
-   Simplify resource transformation and response caching ([dfc95a66], [@faustbrian])
-   Pass the booted service provider to boot/disposeWhen ([acc5e16c], [@faustbrian])
-   Split start into register and boot ([4fc0559e], [@faustbrian])
-   Split start into register and boot ([6fe1e1e1], [@faustbrian])
-   Split start into register and boot ([3131db9b], [@faustbrian])
-   Rename enable/disableWhen to boot/disposeWhen ([83c56f15], [@faustbrian])
-   Listen to InternalEvents.ServiceProviderBooted for enable/disableWhen ([8ca90006], [@faustbrian])
-   Flatten the Enums namespace ([dbf7a07a], [@faustbrian])
-   Ship app.json as default configuration ([bc53bce3], [@faustbrian])
-   Remove AttributeService in favour of container bindings ([27668ace], [@faustbrian])
-   Upgrade TypeScript ESLint to support TypeScript 3.7 ([7d449acb], [@faustbrian])
-   Use assertion functions from TypeScript 3.7 ([a801c519], [@faustbrian])
-   Update to TypeScript 3.7 ([65d98fb8], [@faustbrian])
-   Add internal contracts and delete obsolete ones ([afd15125], [@faustbrian])
-   Throw AssertionException instead of using assertions ([0a4a659b], [@faustbrian])
-   Complete IoC migration and adjust tests ([2e7769a9], [@faustbrian])
-   Emit sourcemaps ([25bab007], [@supaiku])
-   Generate network configuration with votes and transfers ([196be48f], [@faustbrian])
-   Support global and local use of attribute stores ([eb52b949], [@faustbrian])
-   Enable strict mode and fix resulting issues ([c5d360fd], [@faustbrian])
-   Use a map to store attributes ([d1cda3c9], [@faustbrian])
-   Remove remote configuration driver ([a3e9749b], [@faustbrian])
-   Make use of more @arkecosystem/utils methods ([8056ef85], [@faustbrian])
-   Update TypeScript configuration ([db0ce174], [@faustbrian])
-   Resolve plugin configurations from service provider repository ([b13d52d3], [@faustbrian])
-   Make use of more @arkecosystem/utils methods ([b0c57992], [@faustbrian])
-   Setup husky and commitlint ([5fa1df36], [@faustbrian])
-   Leave comments for things that need reviews ([a60734a8], [@faustbrian])
-   Use @arkecosystem/utils through @arkecosystem/core-kernel ([6645c131], [@faustbrian])
-   Use cloneDeep, snakeCase and camelCase from @arkecosystem/utils ([3a34308e], [@faustbrian])
-   Temporarily deprecate core-elasticsearch ([8697d1da], [@faustbrian])
-   Make use of IoC in blockchain, p2p and transaction pool ([8059fb51], [@faustbrian])
-   Always check for updates when something runs ([41a869a4], [@faustbrian])
-   Replace proxy services with container bindings ([5d7d3d6c], [@faustbrian])
-   Remove lodash dependencies & general housekeeping ([3c12f5a1], [@faustbrian])
-   Break wallet manager into repository & state management ([b2271ceb], [@faustbrian])
-   Deprecate core-explorer ([d98ada54], [@faustbrian])
-   Deprecate core-exchange-json-rpc and core-http-utils ([7116976d], [@faustbrian])
-   Remove the abstract logger ([bb528bf6], [@faustbrian])
-   Deprecate core-vote-report ([c97357c7], [@faustbrian])
-   Deprecate core-tester-cli ([789fdb70], [@faustbrian])
-   Deprecate core-wallet-api ([6a1f5c1d], [@faustbrian])
-   Merge server utils into an HttpServer class ([d5821761], [@faustbrian])
-   Adapt to new container ([eceab20f], [@faustbrian])
-   Merge core-utils ([56850c56], [@faustbrian])
-   Adapt to new container ([67b10ddc], [@faustbrian])
-   Deprecate core-error-tracker* packages ([0c03165d], [@faustbrian])
-   Implement RFC 5424 log levels ([c6137288], [@faustbrian])
-   Deprecate core-logger-signale and core-logger-winston ([ab8cc65a], [@faustbrian])
-   Guarantee package order in config through arrays ([dc4bc4ed], [@faustbrian])
-   Simplify action implementation and remove awilix ([75199f71], [@faustbrian])
-   Apply builder pattern to events service ([e6c9e9b6], [@faustbrian])
-   Use symbols to avoid name clashes in container ([5f4c6e8c], [@faustbrian])
-   Use object destructuring for event listeners ([d6a42f2e], [@faustbrian])
-   Add container helper methods ([050ce16b], [@faustbrian])
-   Group container and provider logic ([58478848], [@faustbrian])
-   Setup documentation generation with TypeDoc ([01e47446], [@faustbrian])
-   Replace tslint with typescript-eslint ([f407903b], [@faustbrian])
-   Organise contracts and exceptions into namespaces ([aec0f5ad], [@faustbrian])
-   Container friendly naming of bindings ([7c402ac2], [@faustbrian])
-   Migrate plugin entry from objects to service providers ([0c55ea13], [@faustbrian])
-   Remove deprecated folder ([d0c299eb], [@faustbrian])
-   Clean slate for integration and unit tests ([659b881b], [@faustbrian])

### Fixed

-   Block download ([da2e5639], [@sebastijankuzner])
-   Use getRegisteredHandlers() to get all registered handlers in /node/fees controller ([a917e085], [@air1one])
-   Slot, round and forgingInfo calculation for dynamic block times ([2d3fe091], [@sebastijankuzner])
-   Wallet repository clone instantiation ([2fb47e6d], [@rainydio])
-   Fix delegate.lastBlock.timestamp property ([66f39cb4], [@rainydio])
-   Clone wallet on mempool wallet-repository ([140b860f], [@sebastijankuzner])
-   Replace micromatch with nanomatch ([4387b1df], [@sebastijankuzner])
-   Decouple database and state packages ([af5e5423], [@bertiespell])
-   Dynamically import @pm2/io ([4fc57db6], [@sebastijankuzner])
-   RevertBlock ([3565ef51], [@sebastijankuzner])
-   Fix delegate search order ([f21af370], [@rainydio])
-   Limit parameter (rollback #3940) ([39894a40], [@rainydio])
-   Fix order in delegates/{id}/blocks ([50492b45], [@rainydio])
-   Fix transactions/${id} confirmations and timestamp fields ([a7b46a90], [@rainydio])
-   Manually apply b0296e765700d0dc7c0356770bd3941da1609660 ([abfe43f8], [@air1one])
-   Limit max retries form infinity to 1 ([184f5007], [@sebastijankuzner])
-   Disconnect all sockets on peer disconnect ([95d6b2c2], [@sebastijankuzner])
-   Expose two methods for findByHeightRangeWithTransactions ([dc431faf], [@sebastijankuzner])
-   Sort transactions by sequence before saving block ([cd29f850], [@sebastijankuzner])
-   Reset peer errorCounter after response ([1e7d11d4], [@sebastijankuzner])
-   Remove unnecessary assertion check to enable devnet sync ([381e9c7a], [@bertiespell])
-   Uses new promise instead Promise.race ([915263a2], [@sebastijankuzner])
-   Guaranteed transaction order ([110ada8d], [@rainydio])
-   Allow dynamic fees ([2400b8df], [@bertiespell])
-   Remove obsolete check (unique per wallet now) ([d9c8b070], [@air1one])
-   Handle when there is no business.bridgechains ([14a3af3a], [@air1one])
-   Version 1 multi-signature handler should check milestone data ([74e1e379], [@bertiespell])
-   Re-add unconfirmed matcher ([7123ff20], [@air1one])
-   Entity handler bootstrap method, fetch transactions using asset type/subType as number ([4031a51d], [@air1one])
-   Ensure peer port is always an integer to avoid socket validation errors ([4e7cca1f], [@bertiespell])
-   Stream transactions during bootstrap ([8a6be81d], [@rainydio])
-   Restrict internal routes to whitelisted IPs ([34672893], [@bertiespell])
-   Union type with number in pool query ([cf43417e], [@rainydio])
-   Respect CORE_API_RATE_LIMIT_DISABLED env variable ([c7d8242f], [@rainydio])
-   Fix entity bootstrap methods ([89a7176f], [@air1one])
-   Transaction builder should build and sign versioned transactions ([93937b28], [@bertiespell])
-   Prevent watcher from calling app.reboot multiple times ([0d4b2102], [@rainydio])
-   InitializeActiveDelegates just use current round ([7fa7af25], [@air1one])
-   Return serialized transactions ([7e369b18], [@air1one])
-   Fix round order ([9921a0d1], [@rainydio])
-   Fix delete blocks ([b2fee486], [@rainydio])
-   Transaction filter multipayment recipientId ([70700fa2], [@rainydio])
-   Handle transaction deserialize error ([09e08927], [@rainydio])
-   Return last common block ([b2196097], [@sebastijankuzner])
-   Rebuild vs update race ([507f8112], [@rainydio])
-   Replace ws connection logging method ([3525e860], [@sebastijankuzner])
-   Log all unexpected errors ([9fc047a1], [@rainydio])
-   Fix transaction resource responses ([b3e0b984], [@rainydio])
-   Re-add transactions to pool when milestone changes ([eddb726f], [@rainydio])
-   Set default orderBy value ([9ea9bb4e], [@rainydio])
-   Introduce CORE_RESET_POOL env variable ([ba49d879], [@rainydio])
-   Use hapi inject when creating transfer transaction ([3ac7a034], [@rainydio])
-   Straight delete blocks during rollback ([b87a7a8a], [@rainydio])
-   Round deletion when deleting blocks ([62f5ae96], [@rainydio])
-   Fix wallet/transactions confirmations and timestamp fields ([666ba678], [@rainydio])
-   Include multipayment in forged amount ([3439e528], [@rainydio])
-   Handle multipayment recipientId during search ([67ae0c81], [@rainydio])
-   Throw ERR_HIGH_FEE when fee is too high ([8a383b8d], [@sebastijankuzner])
-   Get app version from package.json ([56107062], [@air1one])
-   Show log levels <= defined threshold level ([e1921baa], [@air1one])
-   Import scope ([37cb56ef], [@kovaczan])
-   Add check in config-cli command to check whether the token flag has been set ([94c2da2b], [@bertiespell])
-   Blockchain and p2p fixes to be able to launch a network ([e97a18ae], [@air1one])
-   Change import scope from @package to @arkecosystem ([606faac8], [@kovaczan])
-   Log warning when active delegates are under the required delegate count ([937ffa08], [@bertiespell])
-   Undefined pool variable ([9a8ecde9], [@rainydio])
-   Allow string and number for rewardAmount ([f7c47410], [@faustbrian])
-   Enable HTLC by default ([37728bdc], [@faustbrian])
-   Add username and secondPublicKey to wallet resource ([c12064dc], [@faustbrian])
-   CalculateLockExpirationStatus method signature ([fc672020], [@faustbrian])
-   Adjust transaction factory for custom network configurations ([ab27881a], [@faustbrian])
-   Use Joi.object() in schema definition ([2a325d19], [@air1one])
-   Issues after merge ([8bea9241], [@faustbrian])
-   Allow missing publicKey, since it isnt guaranteed to exist ([59a8eddd], [@supaiku])
-   Inject ([29f4f6bf], [@supaiku])
-   Search by genesisHash in show method ([ed5b17a6], [@supaiku])
-   Use wallet publicKey for business id index ([3fd2b2ab], [@supaiku])
-   Remove password flag constraint for core:forger command ([969732ce], [@supaiku])
-   Don't swallow BIP38 errors ([344cbbdc], [@supaiku])
-   Use genesisHash for bridgechainId ([b0494a3d], [@supaiku])
-   Wallet-manager fallback to database wallet manager findByIndex() when no "local" match ([9af6aa0a], [@supaiku])
-   Do not attempt to convert vendorfield ([a7034bf9], [@supaiku])
-   Adjust genericName regex and add tests ([a9144f0a], [@supaiku])
-   Case insensitive bridgechain comparison ([52b91a7f], [@supaiku])
-   Add additional bridgechain registration exception handling ([7d7a4a81], [@supaiku])
-   Htlc bootstrap ([f6a007d8], [@supaiku])
-   Add ipfs exception handling ([693160ee], [@supaiku])
-   Check for an exception before checking for invalid fees ([a44f9771], [@supaiku])
-   Stricter WS/SC events/messages handling ([31abd8ee], [@supaiku])
-   Allow unvoting a resigned delegate ([a742fac0], [@supaiku])
-   Remove delegate.rank for resigned delegates ([6a97dcd4], [@supaiku])
-   Fix(core-api) include typeGroup in `/transactions/fees` and `/node/fees` endpoints ([1fe6e1b1], [@supaiku])
-   Validate address of multi payment recipients ([5122f084], [@supaiku])
-   Reindex wallet when applying delegate resignation ([2ab25931], [@supaiku])
-   Return error when app is not ready ([c7d9249c], [@supaiku])
-   Call next() so that the request can proceed ([76c7f8d0], [@supaiku])
-   Timeout promise race ([5a9a24c3], [@supaiku])
-   Write accepted blocks to database before… ([28611aef], [@supaiku])
-   Properly implement block size limit ([8e476bc3], [@supaiku])
-   Improve 'name' field validation to… ([b5d6c14f], [@supaiku])
-   Uncaught IPC timeout ([f1716e1f], [@supaiku])
-   Add transactions back to pool only after… ([3b026d6e], [@supaiku])
-   Parallel download ([80d6712b], [@vasild])
-   Emit correct event ([02a575ca], [@dated])
-   Use numerics for typeGroups in /transactions/typ… ([c199cd80], [@vasild])
-   Set last height before initializing last bl… ([3f28e9da], [@supaiku])
-   Properly terminate bad connections ([6f7b54cf], [@alessiodf])
-   Throw if transaction key is already tak… ([eaadddc4], [@supaiku])
-   Use strict comparison to decide if a transaction should be enabled ([27abce8e], [@faustbrian])
-   Respect the include and exclude rules of the CLI ([6c41a083], [@faustbrian])
-   Resolve issues and conflicts after 2.6 merge ([6a1f8d2b], [@faustbrian])
-   Activate AIP11 at height 2 on testnet to avoid genesis collision ([2ca694f9], [@faustbrian])
-   Resolve issues and conflicts after 2.6 merge ([bfa2c282], [@faustbrian])
-   Transaction pool options access ([29e8485f], [@faustbrian])
-   Resolve logger as log from container ([daf1d922], [@faustbrian])
-   Get the basics running again ([53e4469f], [@faustbrian])
-   Resolve build issues after core-kernel introduction ([e8a2d6be], [@faustbrian])
-   Update core-interfaces imports to core-kernel ([c70bf0bb], [@faustbrian])

[@adrian69]: https://github.com/adrian69
[@air1one]: https://github.com/air1one
[@alessiodf]: https://github.com/alessiodf
[@bertiespell]: https://github.com/bertiespell
[@dated]: https://github.com/dated
[@faustbrian]: https://github.com/faustbrian
[@kovaczan]: https://github.com/kovaczan
[@lemii]: https://github.com/lemii
[@rainydio]: https://github.com/rainydio
[@sebastijankuzner]: https://github.com/sebastijankuzner
[@sleepdefic1t]: https://github.com/sleepdefic1t
[@supaiku]: https://github.com/supaiku
[@vasild]: https://github.com/vasild
[00f4964b]: https://github.com/ARKEcosystem/core/commit/00f4964b
[01e47446]: https://github.com/ARKEcosystem/core/commit/01e47446
[027c6dec]: https://github.com/ARKEcosystem/core/commit/027c6dec
[02a575ca]: https://github.com/ARKEcosystem/core/commit/02a575ca
[0367e8e1]: https://github.com/ARKEcosystem/core/commit/0367e8e1
[03b51cc6]: https://github.com/ARKEcosystem/core/commit/03b51cc6
[03c2ea3b]: https://github.com/ARKEcosystem/core/commit/03c2ea3b
[04436877]: https://github.com/ARKEcosystem/core/commit/04436877
[044ca830]: https://github.com/ARKEcosystem/core/commit/044ca830
[050ce16b]: https://github.com/ARKEcosystem/core/commit/050ce16b
[052aae85]: https://github.com/ARKEcosystem/core/commit/052aae85
[0601aea4]: https://github.com/ARKEcosystem/core/commit/0601aea4
[084b3962]: https://github.com/ARKEcosystem/core/commit/084b3962
[08ca0fac]: https://github.com/ARKEcosystem/core/commit/08ca0fac
[08d8c936]: https://github.com/ARKEcosystem/core/commit/08d8c936
[09e08927]: https://github.com/ARKEcosystem/core/commit/09e08927
[0a4a659b]: https://github.com/ARKEcosystem/core/commit/0a4a659b
[0a69f659]: https://github.com/ARKEcosystem/core/commit/0a69f659
[0acd17fd]: https://github.com/ARKEcosystem/core/commit/0acd17fd
[0c03165d]: https://github.com/ARKEcosystem/core/commit/0c03165d
[0c55ea13]: https://github.com/ARKEcosystem/core/commit/0c55ea13
[0cb6ba01]: https://github.com/ARKEcosystem/core/commit/0cb6ba01
[0d4b2102]: https://github.com/ARKEcosystem/core/commit/0d4b2102
[0d5390fd]: https://github.com/ARKEcosystem/core/commit/0d5390fd
[0d726edf]: https://github.com/ARKEcosystem/core/commit/0d726edf
[0f7e589b]: https://github.com/ARKEcosystem/core/commit/0f7e589b
[0ff67a96]: https://github.com/ARKEcosystem/core/commit/0ff67a96
[10e82175]: https://github.com/ARKEcosystem/core/commit/10e82175
[110ada8d]: https://github.com/ARKEcosystem/core/commit/110ada8d
[118be7ba]: https://github.com/ARKEcosystem/core/commit/118be7ba
[140b860f]: https://github.com/ARKEcosystem/core/commit/140b860f
[148e98f1]: https://github.com/ARKEcosystem/core/commit/148e98f1
[14a3af3a]: https://github.com/ARKEcosystem/core/commit/14a3af3a
[166b1dac]: https://github.com/ARKEcosystem/core/commit/166b1dac
[168c0c79]: https://github.com/ARKEcosystem/core/commit/168c0c79
[169170e5]: https://github.com/ARKEcosystem/core/commit/169170e5
[17fcaf37]: https://github.com/ARKEcosystem/core/commit/17fcaf37
[184f5007]: https://github.com/ARKEcosystem/core/commit/184f5007
[193417e1]: https://github.com/ARKEcosystem/core/commit/193417e1
[196be48f]: https://github.com/ARKEcosystem/core/commit/196be48f
[1a4e1320]: https://github.com/ARKEcosystem/core/commit/1a4e1320
[1a81aee4]: https://github.com/ARKEcosystem/core/commit/1a81aee4
[1a823ee7]: https://github.com/ARKEcosystem/core/commit/1a823ee7
[1b7d90ac]: https://github.com/ARKEcosystem/core/commit/1b7d90ac
[1bfc528a]: https://github.com/ARKEcosystem/core/commit/1bfc528a
[1c968188]: https://github.com/ARKEcosystem/core/commit/1c968188
[1cb7e23e]: https://github.com/ARKEcosystem/core/commit/1cb7e23e
[1d10acf5]: https://github.com/ARKEcosystem/core/commit/1d10acf5
[1d9dd821]: https://github.com/ARKEcosystem/core/commit/1d9dd821
[1de4f3fc]: https://github.com/ARKEcosystem/core/commit/1de4f3fc
[1e489b06]: https://github.com/ARKEcosystem/core/commit/1e489b06
[1e7d11d4]: https://github.com/ARKEcosystem/core/commit/1e7d11d4
[1f5aee46]: https://github.com/ARKEcosystem/core/commit/1f5aee46
[1fe6e1b1]: https://github.com/ARKEcosystem/core/commit/1fe6e1b1
[2038cd5a]: https://github.com/ARKEcosystem/core/commit/2038cd5a
[213b71a1]: https://github.com/ARKEcosystem/core/commit/213b71a1
[218555a3]: https://github.com/ARKEcosystem/core/commit/218555a3
[2400b8df]: https://github.com/ARKEcosystem/core/commit/2400b8df
[243f0bca]: https://github.com/ARKEcosystem/core/commit/243f0bca
[24b164b1]: https://github.com/ARKEcosystem/core/commit/24b164b1
[25bab007]: https://github.com/ARKEcosystem/core/commit/25bab007
[27668ace]: https://github.com/ARKEcosystem/core/commit/27668ace
[27813b35]: https://github.com/ARKEcosystem/core/commit/27813b35
[27abce8e]: https://github.com/ARKEcosystem/core/commit/27abce8e
[28611aef]: https://github.com/ARKEcosystem/core/commit/28611aef
[292d9e84]: https://github.com/ARKEcosystem/core/commit/292d9e84
[29672aa9]: https://github.com/ARKEcosystem/core/commit/29672aa9
[29e8485f]: https://github.com/ARKEcosystem/core/commit/29e8485f
[29f4f6bf]: https://github.com/ARKEcosystem/core/commit/29f4f6bf
[2a325d19]: https://github.com/ARKEcosystem/core/commit/2a325d19
[2ab25931]: https://github.com/ARKEcosystem/core/commit/2ab25931
[2aca6e17]: https://github.com/ARKEcosystem/core/commit/2aca6e17
[2c43f6c6]: https://github.com/ARKEcosystem/core/commit/2c43f6c6
[2ca694f9]: https://github.com/ARKEcosystem/core/commit/2ca694f9
[2d3fe091]: https://github.com/ARKEcosystem/core/commit/2d3fe091
[2d5ea1aa]: https://github.com/ARKEcosystem/core/commit/2d5ea1aa
[2e7769a9]: https://github.com/ARKEcosystem/core/commit/2e7769a9
[2eb295d5]: https://github.com/ARKEcosystem/core/commit/2eb295d5
[2f734e4f]: https://github.com/ARKEcosystem/core/commit/2f734e4f
[2fb47e6d]: https://github.com/ARKEcosystem/core/commit/2fb47e6d
[312a1a71]: https://github.com/ARKEcosystem/core/commit/312a1a71
[3131db9b]: https://github.com/ARKEcosystem/core/commit/3131db9b
[317a89fe]: https://github.com/ARKEcosystem/core/commit/317a89fe
[319f778c]: https://github.com/ARKEcosystem/core/commit/319f778c
[31abd8ee]: https://github.com/ARKEcosystem/core/commit/31abd8ee
[3439e528]: https://github.com/ARKEcosystem/core/commit/3439e528
[344cbbdc]: https://github.com/ARKEcosystem/core/commit/344cbbdc
[344de61a]: https://github.com/ARKEcosystem/core/commit/344de61a
[34672893]: https://github.com/ARKEcosystem/core/commit/34672893
[34b7e34e]: https://github.com/ARKEcosystem/core/commit/34b7e34e
[3525e860]: https://github.com/ARKEcosystem/core/commit/3525e860
[3559f71e]: https://github.com/ARKEcosystem/core/commit/3559f71e
[3565ef51]: https://github.com/ARKEcosystem/core/commit/3565ef51
[35710668]: https://github.com/ARKEcosystem/core/commit/35710668
[35ef5926]: https://github.com/ARKEcosystem/core/commit/35ef5926
[36a607ab]: https://github.com/ARKEcosystem/core/commit/36a607ab
[3753b290]: https://github.com/ARKEcosystem/core/commit/3753b290
[37728bdc]: https://github.com/ARKEcosystem/core/commit/37728bdc
[37cb56ef]: https://github.com/ARKEcosystem/core/commit/37cb56ef
[381e9c7a]: https://github.com/ARKEcosystem/core/commit/381e9c7a
[39455227]: https://github.com/ARKEcosystem/core/commit/39455227
[39894a40]: https://github.com/ARKEcosystem/core/commit/39894a40
[3a34308e]: https://github.com/ARKEcosystem/core/commit/3a34308e
[3ac7a034]: https://github.com/ARKEcosystem/core/commit/3ac7a034
[3b026d6e]: https://github.com/ARKEcosystem/core/commit/3b026d6e
[3c12f5a1]: https://github.com/ARKEcosystem/core/commit/3c12f5a1
[3c413d43]: https://github.com/ARKEcosystem/core/commit/3c413d43
[3eab947d]: https://github.com/ARKEcosystem/core/commit/3eab947d
[3f28e9da]: https://github.com/ARKEcosystem/core/commit/3f28e9da
[3f62bb54]: https://github.com/ARKEcosystem/core/commit/3f62bb54
[3f8727b2]: https://github.com/ARKEcosystem/core/commit/3f8727b2
[3fd2b2ab]: https://github.com/ARKEcosystem/core/commit/3fd2b2ab
[4031a51d]: https://github.com/ARKEcosystem/core/commit/4031a51d
[40ddab0d]: https://github.com/ARKEcosystem/core/commit/40ddab0d
[4190ed63]: https://github.com/ARKEcosystem/core/commit/4190ed63
[41a869a4]: https://github.com/ARKEcosystem/core/commit/41a869a4
[42b0805c]: https://github.com/ARKEcosystem/core/commit/42b0805c
[437f8cfd]: https://github.com/ARKEcosystem/core/commit/437f8cfd
[4387b1df]: https://github.com/ARKEcosystem/core/commit/4387b1df
[43ce7dd4]: https://github.com/ARKEcosystem/core/commit/43ce7dd4
[44088992]: https://github.com/ARKEcosystem/core/commit/44088992
[460c6faa]: https://github.com/ARKEcosystem/core/commit/460c6faa
[47275d67]: https://github.com/ARKEcosystem/core/commit/47275d67
[4757531e]: https://github.com/ARKEcosystem/core/commit/4757531e
[47d3cf20]: https://github.com/ARKEcosystem/core/commit/47d3cf20
[4999fec6]: https://github.com/ARKEcosystem/core/commit/4999fec6
[4a9afb4a]: https://github.com/ARKEcosystem/core/commit/4a9afb4a
[4e685146]: https://github.com/ARKEcosystem/core/commit/4e685146
[4e7cca1f]: https://github.com/ARKEcosystem/core/commit/4e7cca1f
[4ef29686]: https://github.com/ARKEcosystem/core/commit/4ef29686
[4f3e8dce]: https://github.com/ARKEcosystem/core/commit/4f3e8dce
[4fc0559e]: https://github.com/ARKEcosystem/core/commit/4fc0559e
[4fc57db6]: https://github.com/ARKEcosystem/core/commit/4fc57db6
[4ff97a26]: https://github.com/ARKEcosystem/core/commit/4ff97a26
[50492b45]: https://github.com/ARKEcosystem/core/commit/50492b45
[507f8112]: https://github.com/ARKEcosystem/core/commit/507f8112
[50ce984e]: https://github.com/ARKEcosystem/core/commit/50ce984e
[5122f084]: https://github.com/ARKEcosystem/core/commit/5122f084
[5191f699]: https://github.com/ARKEcosystem/core/commit/5191f699
[51d01a2d]: https://github.com/ARKEcosystem/core/commit/51d01a2d
[5222b5cf]: https://github.com/ARKEcosystem/core/commit/5222b5cf
[52b91a7f]: https://github.com/ARKEcosystem/core/commit/52b91a7f
[53cb5c4f]: https://github.com/ARKEcosystem/core/commit/53cb5c4f
[53e4469f]: https://github.com/ARKEcosystem/core/commit/53e4469f
[55a8bbb5]: https://github.com/ARKEcosystem/core/commit/55a8bbb5
[56107062]: https://github.com/ARKEcosystem/core/commit/56107062
[56850c56]: https://github.com/ARKEcosystem/core/commit/56850c56
[5700867d]: https://github.com/ARKEcosystem/core/commit/5700867d
[5834847a]: https://github.com/ARKEcosystem/core/commit/5834847a
[583f5a92]: https://github.com/ARKEcosystem/core/commit/583f5a92
[58478848]: https://github.com/ARKEcosystem/core/commit/58478848
[59a8eddd]: https://github.com/ARKEcosystem/core/commit/59a8eddd
[5a5b3d7f]: https://github.com/ARKEcosystem/core/commit/5a5b3d7f
[5a82211f]: https://github.com/ARKEcosystem/core/commit/5a82211f
[5a9a24c3]: https://github.com/ARKEcosystem/core/commit/5a9a24c3
[5c3afa4a]: https://github.com/ARKEcosystem/core/commit/5c3afa4a
[5c404b69]: https://github.com/ARKEcosystem/core/commit/5c404b69
[5d7d3d6c]: https://github.com/ARKEcosystem/core/commit/5d7d3d6c
[5d96cbfc]: https://github.com/ARKEcosystem/core/commit/5d96cbfc
[5e5eb2a4]: https://github.com/ARKEcosystem/core/commit/5e5eb2a4
[5ef81ef7]: https://github.com/ARKEcosystem/core/commit/5ef81ef7
[5f4c6e8c]: https://github.com/ARKEcosystem/core/commit/5f4c6e8c
[5fa1df36]: https://github.com/ARKEcosystem/core/commit/5fa1df36
[60624a3f]: https://github.com/ARKEcosystem/core/commit/60624a3f
[606faac8]: https://github.com/ARKEcosystem/core/commit/606faac8
[62f5ae96]: https://github.com/ARKEcosystem/core/commit/62f5ae96
[640b9a1a]: https://github.com/ARKEcosystem/core/commit/640b9a1a
[6529b133]: https://github.com/ARKEcosystem/core/commit/6529b133
[659b881b]: https://github.com/ARKEcosystem/core/commit/659b881b
[65d98fb8]: https://github.com/ARKEcosystem/core/commit/65d98fb8
[6645c131]: https://github.com/ARKEcosystem/core/commit/6645c131
[666ba678]: https://github.com/ARKEcosystem/core/commit/666ba678
[66f39cb4]: https://github.com/ARKEcosystem/core/commit/66f39cb4
[67ae0c81]: https://github.com/ARKEcosystem/core/commit/67ae0c81
[67b10ddc]: https://github.com/ARKEcosystem/core/commit/67b10ddc
[67cd2c67]: https://github.com/ARKEcosystem/core/commit/67cd2c67
[68f13e6c]: https://github.com/ARKEcosystem/core/commit/68f13e6c
[693160ee]: https://github.com/ARKEcosystem/core/commit/693160ee
[6a1f5c1d]: https://github.com/ARKEcosystem/core/commit/6a1f5c1d
[6a1f8d2b]: https://github.com/ARKEcosystem/core/commit/6a1f8d2b
[6a97dcd4]: https://github.com/ARKEcosystem/core/commit/6a97dcd4
[6bb4fedd]: https://github.com/ARKEcosystem/core/commit/6bb4fedd
[6c41a083]: https://github.com/ARKEcosystem/core/commit/6c41a083
[6d6b6d33]: https://github.com/ARKEcosystem/core/commit/6d6b6d33
[6dacdfbb]: https://github.com/ARKEcosystem/core/commit/6dacdfbb
[6e59a43d]: https://github.com/ARKEcosystem/core/commit/6e59a43d
[6e969dd1]: https://github.com/ARKEcosystem/core/commit/6e969dd1
[6f7b54cf]: https://github.com/ARKEcosystem/core/commit/6f7b54cf
[6f9887f9]: https://github.com/ARKEcosystem/core/commit/6f9887f9
[6fe1e1e1]: https://github.com/ARKEcosystem/core/commit/6fe1e1e1
[6ff40720]: https://github.com/ARKEcosystem/core/commit/6ff40720
[700b9cd6]: https://github.com/ARKEcosystem/core/commit/700b9cd6
[70700fa2]: https://github.com/ARKEcosystem/core/commit/70700fa2
[7116976d]: https://github.com/ARKEcosystem/core/commit/7116976d
[7123ff20]: https://github.com/ARKEcosystem/core/commit/7123ff20
[72440be8]: https://github.com/ARKEcosystem/core/commit/72440be8
[74e1e379]: https://github.com/ARKEcosystem/core/commit/74e1e379
[7510239e]: https://github.com/ARKEcosystem/core/commit/7510239e
[75199f71]: https://github.com/ARKEcosystem/core/commit/75199f71
[75c11774]: https://github.com/ARKEcosystem/core/commit/75c11774
[76c7f8d0]: https://github.com/ARKEcosystem/core/commit/76c7f8d0
[76e9317a]: https://github.com/ARKEcosystem/core/commit/76e9317a
[773eb8ce]: https://github.com/ARKEcosystem/core/commit/773eb8ce
[77719976]: https://github.com/ARKEcosystem/core/commit/77719976
[77893fda]: https://github.com/ARKEcosystem/core/commit/77893fda
[77e03662]: https://github.com/ARKEcosystem/core/commit/77e03662
[789fdb70]: https://github.com/ARKEcosystem/core/commit/789fdb70
[7a8bb932]: https://github.com/ARKEcosystem/core/commit/7a8bb932
[7c402ac2]: https://github.com/ARKEcosystem/core/commit/7c402ac2
[7ca7d968]: https://github.com/ARKEcosystem/core/commit/7ca7d968
[7cb916ab]: https://github.com/ARKEcosystem/core/commit/7cb916ab
[7cf1b107]: https://github.com/ARKEcosystem/core/commit/7cf1b107
[7d449acb]: https://github.com/ARKEcosystem/core/commit/7d449acb
[7d7a4a81]: https://github.com/ARKEcosystem/core/commit/7d7a4a81
[7db01265]: https://github.com/ARKEcosystem/core/commit/7db01265
[7e369b18]: https://github.com/ARKEcosystem/core/commit/7e369b18
[7fa7af25]: https://github.com/ARKEcosystem/core/commit/7fa7af25
[7fc356c7]: https://github.com/ARKEcosystem/core/commit/7fc356c7
[8056ef85]: https://github.com/ARKEcosystem/core/commit/8056ef85
[8059fb51]: https://github.com/ARKEcosystem/core/commit/8059fb51
[80d6712b]: https://github.com/ARKEcosystem/core/commit/80d6712b
[81ebb949]: https://github.com/ARKEcosystem/core/commit/81ebb949
[82382fc9]: https://github.com/ARKEcosystem/core/commit/82382fc9
[82623ff7]: https://github.com/ARKEcosystem/core/commit/82623ff7
[838ca5de]: https://github.com/ARKEcosystem/core/commit/838ca5de
[83c56f15]: https://github.com/ARKEcosystem/core/commit/83c56f15
[8465625e]: https://github.com/ARKEcosystem/core/commit/8465625e
[8482282a]: https://github.com/ARKEcosystem/core/commit/8482282a
[84aee929]: https://github.com/ARKEcosystem/core/commit/84aee929
[84c47884]: https://github.com/ARKEcosystem/core/commit/84c47884
[85287670]: https://github.com/ARKEcosystem/core/commit/85287670
[85b6b605]: https://github.com/ARKEcosystem/core/commit/85b6b605
[8697d1da]: https://github.com/ARKEcosystem/core/commit/8697d1da
[88219cfd]: https://github.com/ARKEcosystem/core/commit/88219cfd
[89a7176f]: https://github.com/ARKEcosystem/core/commit/89a7176f
[8a2033ac]: https://github.com/ARKEcosystem/core/commit/8a2033ac
[8a383b8d]: https://github.com/ARKEcosystem/core/commit/8a383b8d
[8a6be81d]: https://github.com/ARKEcosystem/core/commit/8a6be81d
[8bd81173]: https://github.com/ARKEcosystem/core/commit/8bd81173
[8bea9241]: https://github.com/ARKEcosystem/core/commit/8bea9241
[8ca90006]: https://github.com/ARKEcosystem/core/commit/8ca90006
[8d8bb74f]: https://github.com/ARKEcosystem/core/commit/8d8bb74f
[8df596ab]: https://github.com/ARKEcosystem/core/commit/8df596ab
[8e476bc3]: https://github.com/ARKEcosystem/core/commit/8e476bc3
[8e5475d9]: https://github.com/ARKEcosystem/core/commit/8e5475d9
[8ebf8218]: https://github.com/ARKEcosystem/core/commit/8ebf8218
[8f7d0d31]: https://github.com/ARKEcosystem/core/commit/8f7d0d31
[8fc18c1a]: https://github.com/ARKEcosystem/core/commit/8fc18c1a
[905b8d22]: https://github.com/ARKEcosystem/core/commit/905b8d22
[905cac2f]: https://github.com/ARKEcosystem/core/commit/905cac2f
[915263a2]: https://github.com/ARKEcosystem/core/commit/915263a2
[937ffa08]: https://github.com/ARKEcosystem/core/commit/937ffa08
[93937b28]: https://github.com/ARKEcosystem/core/commit/93937b28
[94c2da2b]: https://github.com/ARKEcosystem/core/commit/94c2da2b
[95a787c2]: https://github.com/ARKEcosystem/core/commit/95a787c2
[95d6b2c2]: https://github.com/ARKEcosystem/core/commit/95d6b2c2
[969732ce]: https://github.com/ARKEcosystem/core/commit/969732ce
[97746d0c]: https://github.com/ARKEcosystem/core/commit/97746d0c
[9796d138]: https://github.com/ARKEcosystem/core/commit/9796d138
[9894e9ab]: https://github.com/ARKEcosystem/core/commit/9894e9ab
[9921a0d1]: https://github.com/ARKEcosystem/core/commit/9921a0d1
[9a6358a5]: https://github.com/ARKEcosystem/core/commit/9a6358a5
[9a8ecde9]: https://github.com/ARKEcosystem/core/commit/9a8ecde9
[9ac9b453]: https://github.com/ARKEcosystem/core/commit/9ac9b453
[9af6aa0a]: https://github.com/ARKEcosystem/core/commit/9af6aa0a
[9b368c95]: https://github.com/ARKEcosystem/core/commit/9b368c95
[9c20c02e]: https://github.com/ARKEcosystem/core/commit/9c20c02e
[9d12bb1f]: https://github.com/ARKEcosystem/core/commit/9d12bb1f
[9d8de5de]: https://github.com/ARKEcosystem/core/commit/9d8de5de
[9ea9bb4e]: https://github.com/ARKEcosystem/core/commit/9ea9bb4e
[9fc047a1]: https://github.com/ARKEcosystem/core/commit/9fc047a1
[a0096ffe]: https://github.com/ARKEcosystem/core/commit/a0096ffe
[a116e3f0]: https://github.com/ARKEcosystem/core/commit/a116e3f0
[a1246552]: https://github.com/ARKEcosystem/core/commit/a1246552
[a13bf618]: https://github.com/ARKEcosystem/core/commit/a13bf618
[a27b6c3f]: https://github.com/ARKEcosystem/core/commit/a27b6c3f
[a29466e8]: https://github.com/ARKEcosystem/core/commit/a29466e8
[a399f194]: https://github.com/ARKEcosystem/core/commit/a399f194
[a3e9749b]: https://github.com/ARKEcosystem/core/commit/a3e9749b
[a44f9771]: https://github.com/ARKEcosystem/core/commit/a44f9771
[a60734a8]: https://github.com/ARKEcosystem/core/commit/a60734a8
[a636dfd3]: https://github.com/ARKEcosystem/core/commit/a636dfd3
[a7034bf9]: https://github.com/ARKEcosystem/core/commit/a7034bf9
[a742fac0]: https://github.com/ARKEcosystem/core/commit/a742fac0
[a7b46a90]: https://github.com/ARKEcosystem/core/commit/a7b46a90
[a7f3d03e]: https://github.com/ARKEcosystem/core/commit/a7f3d03e
[a801c519]: https://github.com/ARKEcosystem/core/commit/a801c519
[a82a0943]: https://github.com/ARKEcosystem/core/commit/a82a0943
[a9144f0a]: https://github.com/ARKEcosystem/core/commit/a9144f0a
[a917e085]: https://github.com/ARKEcosystem/core/commit/a917e085
[a9241c6c]: https://github.com/ARKEcosystem/core/commit/a9241c6c
[ab27881a]: https://github.com/ARKEcosystem/core/commit/ab27881a
[ab8cc65a]: https://github.com/ARKEcosystem/core/commit/ab8cc65a
[abfe43f8]: https://github.com/ARKEcosystem/core/commit/abfe43f8
[ac0c0fef]: https://github.com/ARKEcosystem/core/commit/ac0c0fef
[acc5e16c]: https://github.com/ARKEcosystem/core/commit/acc5e16c
[acf34236]: https://github.com/ARKEcosystem/core/commit/acf34236
[ad5e8230]: https://github.com/ARKEcosystem/core/commit/ad5e8230
[ade3a5d4]: https://github.com/ARKEcosystem/core/commit/ade3a5d4
[ae160d6e]: https://github.com/ARKEcosystem/core/commit/ae160d6e
[ae6cab5d]: https://github.com/ARKEcosystem/core/commit/ae6cab5d
[aec0f5ad]: https://github.com/ARKEcosystem/core/commit/aec0f5ad
[af2d8dcf]: https://github.com/ARKEcosystem/core/commit/af2d8dcf
[af5e5423]: https://github.com/ARKEcosystem/core/commit/af5e5423
[afd15125]: https://github.com/ARKEcosystem/core/commit/afd15125
[b0494a3d]: https://github.com/ARKEcosystem/core/commit/b0494a3d
[b0c57992]: https://github.com/ARKEcosystem/core/commit/b0c57992
[b13d52d3]: https://github.com/ARKEcosystem/core/commit/b13d52d3
[b1efd04c]: https://github.com/ARKEcosystem/core/commit/b1efd04c
[b2196097]: https://github.com/ARKEcosystem/core/commit/b2196097
[b2271ceb]: https://github.com/ARKEcosystem/core/commit/b2271ceb
[b2fee486]: https://github.com/ARKEcosystem/core/commit/b2fee486
[b337cbe3]: https://github.com/ARKEcosystem/core/commit/b337cbe3
[b37233e3]: https://github.com/ARKEcosystem/core/commit/b37233e3
[b3aab122]: https://github.com/ARKEcosystem/core/commit/b3aab122
[b3e0b984]: https://github.com/ARKEcosystem/core/commit/b3e0b984
[b42bfb6f]: https://github.com/ARKEcosystem/core/commit/b42bfb6f
[b51793a6]: https://github.com/ARKEcosystem/core/commit/b51793a6
[b5d6c14f]: https://github.com/ARKEcosystem/core/commit/b5d6c14f
[b87899a5]: https://github.com/ARKEcosystem/core/commit/b87899a5
[b87a7a8a]: https://github.com/ARKEcosystem/core/commit/b87a7a8a
[b96bb497]: https://github.com/ARKEcosystem/core/commit/b96bb497
[ba49d879]: https://github.com/ARKEcosystem/core/commit/ba49d879
[bab1d914]: https://github.com/ARKEcosystem/core/commit/bab1d914
[bb528bf6]: https://github.com/ARKEcosystem/core/commit/bb528bf6
[bb8cb129]: https://github.com/ARKEcosystem/core/commit/bb8cb129
[bb91fab5]: https://github.com/ARKEcosystem/core/commit/bb91fab5
[bc53bce3]: https://github.com/ARKEcosystem/core/commit/bc53bce3
[bccf74d2]: https://github.com/ARKEcosystem/core/commit/bccf74d2
[bd0370e3]: https://github.com/ARKEcosystem/core/commit/bd0370e3
[bd573137]: https://github.com/ARKEcosystem/core/commit/bd573137
[bdb7f946]: https://github.com/ARKEcosystem/core/commit/bdb7f946
[be252260]: https://github.com/ARKEcosystem/core/commit/be252260
[bf422244]: https://github.com/ARKEcosystem/core/commit/bf422244
[bf892b53]: https://github.com/ARKEcosystem/core/commit/bf892b53
[bfa2c282]: https://github.com/ARKEcosystem/core/commit/bfa2c282
[c03c2dcf]: https://github.com/ARKEcosystem/core/commit/c03c2dcf
[c08d15d4]: https://github.com/ARKEcosystem/core/commit/c08d15d4
[c11af3a1]: https://github.com/ARKEcosystem/core/commit/c11af3a1
[c12064dc]: https://github.com/ARKEcosystem/core/commit/c12064dc
[c199cd80]: https://github.com/ARKEcosystem/core/commit/c199cd80
[c3042577]: https://github.com/ARKEcosystem/core/commit/c3042577
[c4a8b70d]: https://github.com/ARKEcosystem/core/commit/c4a8b70d
[c52b6ab7]: https://github.com/ARKEcosystem/core/commit/c52b6ab7
[c53f6f52]: https://github.com/ARKEcosystem/core/commit/c53f6f52
[c558ddde]: https://github.com/ARKEcosystem/core/commit/c558ddde
[c5b5301b]: https://github.com/ARKEcosystem/core/commit/c5b5301b
[c5d360fd]: https://github.com/ARKEcosystem/core/commit/c5d360fd
[c6137288]: https://github.com/ARKEcosystem/core/commit/c6137288
[c70bf0bb]: https://github.com/ARKEcosystem/core/commit/c70bf0bb
[c74e4ca7]: https://github.com/ARKEcosystem/core/commit/c74e4ca7
[c7606208]: https://github.com/ARKEcosystem/core/commit/c7606208
[c78e5611]: https://github.com/ARKEcosystem/core/commit/c78e5611
[c7d8242f]: https://github.com/ARKEcosystem/core/commit/c7d8242f
[c7d9249c]: https://github.com/ARKEcosystem/core/commit/c7d9249c
[c84b9766]: https://github.com/ARKEcosystem/core/commit/c84b9766
[c88c3325]: https://github.com/ARKEcosystem/core/commit/c88c3325
[c8fdde97]: https://github.com/ARKEcosystem/core/commit/c8fdde97
[c91073ee]: https://github.com/ARKEcosystem/core/commit/c91073ee
[c97357c7]: https://github.com/ARKEcosystem/core/commit/c97357c7
[ca28f66f]: https://github.com/ARKEcosystem/core/commit/ca28f66f
[cad34570]: https://github.com/ARKEcosystem/core/commit/cad34570
[cb50a622]: https://github.com/ARKEcosystem/core/commit/cb50a622
[cc707383]: https://github.com/ARKEcosystem/core/commit/cc707383
[cd29f850]: https://github.com/ARKEcosystem/core/commit/cd29f850
[cded589b]: https://github.com/ARKEcosystem/core/commit/cded589b
[ce618cc3]: https://github.com/ARKEcosystem/core/commit/ce618cc3
[cecf8929]: https://github.com/ARKEcosystem/core/commit/cecf8929
[cf43417e]: https://github.com/ARKEcosystem/core/commit/cf43417e
[cf8a401b]: https://github.com/ARKEcosystem/core/commit/cf8a401b
[cfd39d08]: https://github.com/ARKEcosystem/core/commit/cfd39d08
[cfda8572]: https://github.com/ARKEcosystem/core/commit/cfda8572
[d0650b1a]: https://github.com/ARKEcosystem/core/commit/d0650b1a
[d0775fdc]: https://github.com/ARKEcosystem/core/commit/d0775fdc
[d0c299eb]: https://github.com/ARKEcosystem/core/commit/d0c299eb
[d1cda3c9]: https://github.com/ARKEcosystem/core/commit/d1cda3c9
[d204f752]: https://github.com/ARKEcosystem/core/commit/d204f752
[d449340c]: https://github.com/ARKEcosystem/core/commit/d449340c
[d44e29cc]: https://github.com/ARKEcosystem/core/commit/d44e29cc
[d4acdfe2]: https://github.com/ARKEcosystem/core/commit/d4acdfe2
[d5821761]: https://github.com/ARKEcosystem/core/commit/d5821761
[d5d9b983]: https://github.com/ARKEcosystem/core/commit/d5d9b983
[d65c9de3]: https://github.com/ARKEcosystem/core/commit/d65c9de3
[d6803913]: https://github.com/ARKEcosystem/core/commit/d6803913
[d6a42f2e]: https://github.com/ARKEcosystem/core/commit/d6a42f2e
[d70c4227]: https://github.com/ARKEcosystem/core/commit/d70c4227
[d7e895c0]: https://github.com/ARKEcosystem/core/commit/d7e895c0
[d8076847]: https://github.com/ARKEcosystem/core/commit/d8076847
[d8931255]: https://github.com/ARKEcosystem/core/commit/d8931255
[d98ada54]: https://github.com/ARKEcosystem/core/commit/d98ada54
[d9b8bc56]: https://github.com/ARKEcosystem/core/commit/d9b8bc56
[d9c8b070]: https://github.com/ARKEcosystem/core/commit/d9c8b070
[d9fc0c09]: https://github.com/ARKEcosystem/core/commit/d9fc0c09
[da2e5639]: https://github.com/ARKEcosystem/core/commit/da2e5639
[daadf358]: https://github.com/ARKEcosystem/core/commit/daadf358
[daf1d922]: https://github.com/ARKEcosystem/core/commit/daf1d922
[daf4bb48]: https://github.com/ARKEcosystem/core/commit/daf4bb48
[db0ce174]: https://github.com/ARKEcosystem/core/commit/db0ce174
[dbf7a07a]: https://github.com/ARKEcosystem/core/commit/dbf7a07a
[dc431faf]: https://github.com/ARKEcosystem/core/commit/dc431faf
[dc4bc4ed]: https://github.com/ARKEcosystem/core/commit/dc4bc4ed
[dc68c251]: https://github.com/ARKEcosystem/core/commit/dc68c251
[dcfff76d]: https://github.com/ARKEcosystem/core/commit/dcfff76d
[dd4c9aba]: https://github.com/ARKEcosystem/core/commit/dd4c9aba
[dd83c08b]: https://github.com/ARKEcosystem/core/commit/dd83c08b
[de75e6ea]: https://github.com/ARKEcosystem/core/commit/de75e6ea
[deb2cd78]: https://github.com/ARKEcosystem/core/commit/deb2cd78
[dfc95a66]: https://github.com/ARKEcosystem/core/commit/dfc95a66
[e1921baa]: https://github.com/ARKEcosystem/core/commit/e1921baa
[e323bb50]: https://github.com/ARKEcosystem/core/commit/e323bb50
[e428af25]: https://github.com/ARKEcosystem/core/commit/e428af25
[e516c544]: https://github.com/ARKEcosystem/core/commit/e516c544
[e69e33c0]: https://github.com/ARKEcosystem/core/commit/e69e33c0
[e6c9e9b6]: https://github.com/ARKEcosystem/core/commit/e6c9e9b6
[e6d579d6]: https://github.com/ARKEcosystem/core/commit/e6d579d6
[e8000a63]: https://github.com/ARKEcosystem/core/commit/e8000a63
[e8a2d6be]: https://github.com/ARKEcosystem/core/commit/e8a2d6be
[e943e563]: https://github.com/ARKEcosystem/core/commit/e943e563
[e97a18ae]: https://github.com/ARKEcosystem/core/commit/e97a18ae
[ea195e2b]: https://github.com/ARKEcosystem/core/commit/ea195e2b
[eaadddc4]: https://github.com/ARKEcosystem/core/commit/eaadddc4
[eb52b949]: https://github.com/ARKEcosystem/core/commit/eb52b949
[eceab20f]: https://github.com/ARKEcosystem/core/commit/eceab20f
[ed5b17a6]: https://github.com/ARKEcosystem/core/commit/ed5b17a6
[ed8a0e80]: https://github.com/ARKEcosystem/core/commit/ed8a0e80
[eddb726f]: https://github.com/ARKEcosystem/core/commit/eddb726f
[ef450f9d]: https://github.com/ARKEcosystem/core/commit/ef450f9d
[f00e075d]: https://github.com/ARKEcosystem/core/commit/f00e075d
[f0acce87]: https://github.com/ARKEcosystem/core/commit/f0acce87
[f0fe8b93]: https://github.com/ARKEcosystem/core/commit/f0fe8b93
[f1716e1f]: https://github.com/ARKEcosystem/core/commit/f1716e1f
[f18928dd]: https://github.com/ARKEcosystem/core/commit/f18928dd
[f21af370]: https://github.com/ARKEcosystem/core/commit/f21af370
[f28ba8db]: https://github.com/ARKEcosystem/core/commit/f28ba8db
[f2a5852a]: https://github.com/ARKEcosystem/core/commit/f2a5852a
[f2da0bd8]: https://github.com/ARKEcosystem/core/commit/f2da0bd8
[f31109fc]: https://github.com/ARKEcosystem/core/commit/f31109fc
[f4025bbc]: https://github.com/ARKEcosystem/core/commit/f4025bbc
[f407903b]: https://github.com/ARKEcosystem/core/commit/f407903b
[f471dd97]: https://github.com/ARKEcosystem/core/commit/f471dd97
[f47b55c8]: https://github.com/ARKEcosystem/core/commit/f47b55c8
[f67c9137]: https://github.com/ARKEcosystem/core/commit/f67c9137
[f6a007d8]: https://github.com/ARKEcosystem/core/commit/f6a007d8
[f7c47410]: https://github.com/ARKEcosystem/core/commit/f7c47410
[f87e146f]: https://github.com/ARKEcosystem/core/commit/f87e146f
[f93a9118]: https://github.com/ARKEcosystem/core/commit/f93a9118
[f961d053]: https://github.com/ARKEcosystem/core/commit/f961d053
[fa49ca80]: https://github.com/ARKEcosystem/core/commit/fa49ca80
[fc157999]: https://github.com/ARKEcosystem/core/commit/fc157999
[fc672020]: https://github.com/ARKEcosystem/core/commit/fc672020
[fcbe909b]: https://github.com/ARKEcosystem/core/commit/fcbe909b
[fcde9544]: https://github.com/ARKEcosystem/core/commit/fcde9544
[feb1970e]: https://github.com/ARKEcosystem/core/commit/feb1970e
[fed54c9d]: https://github.com/ARKEcosystem/core/commit/fed54c9d
[ff8975a0]: https://github.com/ARKEcosystem/core/commit/ff8975a0
