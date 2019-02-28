'use strict';
const fs = require('fs');

const writeResult = (awser, file) => {
    const buffer = awser.length + '\n' +
        awser.map(el => el.join(' '))
        .join('\n');
    fs.writeFile(file, buffer, () => {});
};
module.exports = {writeResult};