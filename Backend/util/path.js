const path = require('path');

const rootDir = require.main ? path.dirname(require.main.filename) : __dirname;

module.exports = rootDir;
