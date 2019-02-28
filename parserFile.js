'use strict';

const fs = require('fs');

const parseFile = (file) => {
    return fs.readFileSync(file, 'utf8')
        .split('\r\n')
        .slice(1)
        .map(line => {
            const cut = line.split(' ');
            return { vertical: cut[0] === 'V', tags: cut.slice(2) }
        });
};
module.exports = {parseFile};
