'use strict';
const fs = require('fs');

const writeResult = (awser, file) => {
    console.log('write', awser)
    const buffer = awser.length + '\n' +
        awser.map(el => el.join(' '))
        .join('\n');
    fs.writeFile(file, buffer, console.log);
};
module.exports = {writeResult};