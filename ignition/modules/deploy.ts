import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const NftOnchainModule = buildModule("NftOnchain", (m) => {

    const nftOnchain = m.contract("NftOnchain");
    return { nftOnchain };
});

export default NftOnchainModule;