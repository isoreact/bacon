'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./isoreact-bacon.cjs.min.js');
} else {
    module.exports = require('./isoreact-bacon.cjs.js');
}
