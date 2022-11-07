// https://eth-goerli.g.alchemy.com/v2/DL7ypScGKBXxembPhiqPF-hwSCM4Yn_0

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/DL7ypScGKBXxembPhiqPF-hwSCM4Yn_0',
      accounts: [ '4894f30988930d999bd206e025aa06b67014956d37068c6516e4977e6fd82d00' ]
    }
  }
}