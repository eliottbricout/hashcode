'use strict';

const fs = require('fs');

const parseFile = (file) => {
    const data = fs.readFileSync(file, 'utf8').split('\r\n');
    return data
        .slice(1, +data[0])
        .map((line, index) => {
            const cut = line.split(' ');
            return {id: index, vertical: cut[0] === 'V', tags: cut.slice(2)}
        });
};
module.exports = {parseFile};
