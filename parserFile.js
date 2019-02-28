'use strict';

const fs = require('fs');

const parseFile = (file) => {
    return fs.readFileSync(file, 'utf8').split('\r\n');
};
module.exports = {parseFile};
