require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift raise saddle pulp hunt fork suit giant'; 
let testAccounts = [
"0x4aeecfba5ebc092f19527fa06491259a1e8cd9a3620f4b829133acf01d9adf75",
"0x920689252f795b5494ea33e278ce3f826a9a36ddf9d1eebc7b4e32f9d293a9e9",
"0x7034408d10d4819a2f46e53829283fbcc8f145b159c592abb2edaf1c6130561a",
"0x107b7e93dafbd6a740917ccccd7c12537262dd3e2302da068e76d78832a80884",
"0x5d82510efe694faca99e4f4785ef6126235d56bd908c9566fda1dae56178cb8a",
"0x8e3beae6d0316b0f3e3cdd6aa0e35ed9edce4c6a9645f2ed35b158d1828689fe",
"0xc1998c850b868761d22259fcbba6ceceb06a8bcfc5073acff66217a44e6804b9",
"0xc34644a35a066130ce6564d2489dc44e3ca58aad93fb50474a0ebcb499805967",
"0x5e8c5b6865122ac63dde4c3225311a88c4b3426ff29e620ef31d264a79af4fc6",
"0xd67af367f2d40d33e20adaf6c36ab970e714c024a9839c1b4252228049e13a2d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
