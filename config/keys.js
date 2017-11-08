//keys.js - figure out what credentials to return
if (process.env.NODE_ENV === 'production') {
  //we are in production
  module.exports = require('./prod');
} else {
  //we are in development -- dev keys
  module.exports = require('./dev');
}
