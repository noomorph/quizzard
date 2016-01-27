import 'core-js';

let context = require.context('.', true, /.+\.(spec|test)\.js$/);
context.keys().forEach(context);
module.exports = context;
