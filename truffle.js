// Allows us to use ES6 in our migrations and tests.
require("babel-register");
require("babel-polyfill");

var HDWalletProvider = require("truffle-hdwallet-provider");

let mnemonic = "";
let infura_apikey = "";

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // for more about customizing your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*" // Match any network id
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey);
            },
            network_id: 3,
            gas: 4600000
        },
        mainnet: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/" + infura_apikey);
            },
            network_id: 1,
            gas: 4600000
        }
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
};
