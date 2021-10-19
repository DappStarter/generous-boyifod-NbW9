require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain evil just enroll orange sister'; 
let testAccounts = [
"0xb5aa0840ef3e0b1c517b2eef848efa8e2c9467d6f0624c436543fca16bec0f3f",
"0xb9d36cf1bba7825a19385cd5016b28062683993c3ae9e9a83d05c7dfab601a86",
"0xc64adb9b779c85d3772d56a462ec8c7d86d4d7016f56825d23fde9ef9c06c5eb",
"0x315800d3810b5b60fb63490306880d4369c4dafc41f0ecdf7eb5b62af5b54caf",
"0x54a4424bcf3d68719ca9834088866ce78db6d1799d05676ae02c5f3c49d09649",
"0x5b1c882517b847a264115691686126ba37c083ace6d3a0a5a0a1ffc03e25cdb7",
"0x84022fc86c177b8f0f91827d20ea87509a304b339907750f740d2ce7b8517416",
"0x11f056d9a49ceb4ad294d1d0510caef13175a8f50b88dea0c6b4dfa8f9927233",
"0xd09ef433db454fc36e39aec6246a1190d2ae21445ac2e75c14b9f8d07d358735",
"0x03b8acdc67fe8b5ad29f0bf0f9ce5b81df704d553007b9bbe5e27d5a7124f42d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

