'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./isoreact-bacon1.browser.cjs.min.js');
} else {
    module.exports = require('./isoreact-bacon1.browser.cjs.js');
}
