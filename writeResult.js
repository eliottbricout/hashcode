'use strict';
const fs = require('fs');

const writeResult = (awser, file) => {
    const buffer = awser.join('\r\n');
    fs.writeFile(file, buffer);
};
module.exports = {writeResult};