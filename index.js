'use strict';
const { parseFile } = require('./parserFile');
const { searchResult } = require('./searchResult');
const { writeResult } = require('./writeResult');

const data = parseFile(`probleme/${process.argv[2] || 'test'}`);
const result = searchResult(data);
console.log(writeResult(result, `solution/${process.argv[2] || 'test'}`));