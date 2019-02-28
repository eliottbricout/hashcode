'use strict';
const fs = require('fs');

const writeResult = (awser, file) => {
    const buffer = awser.length + '\n' +
        awser.join('\n');
    fs.writeFile(file, buffer, () => {});
};
module.exports = {writeResult};