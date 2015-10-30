import 'core-js';
require('containers/main');

let context = require.context('.', true, /.+\.spec\.js$/);
context.keys().forEach(context);
module.exports = context;
