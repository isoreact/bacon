'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./isoreact-bacon1.server.cjs.min.js');
} else {
    module.exports = require('./isoreact-bacon1.server.cjs.js');
}
