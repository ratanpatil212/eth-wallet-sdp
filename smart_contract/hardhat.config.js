//https://eth-ropsten.alchemyapi.io/v2/kmHHbtEkr8rs3OYSJ1lKGlr-b6360BmW


require('@nomiclabs/hardhat-waffle');
module.exports={
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/kmHHbtEkr8rs3OYSJ1lKGlr-b6360BmW',
      accounts:['2c65431af56ab51351e997c0b59441676a42a707133105cbe92938b8c7bf23f4']
    }
  }
}