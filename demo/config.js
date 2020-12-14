const {Networks} = require('bsv-p2p')
module.exports = {
  rpc: {
    protocol: 'http',
    user: "bitcoin",
    pass: "password",
    host: '127.0.0.1',
    port: '18332'
  },
  peer: { 
    host: '127.0.0.1', 
    port: 18332, 
    network: Networks.regtest
   }
}