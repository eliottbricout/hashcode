'use strict';
const { parseFile } = require('./parserFile');
const { searchResult } = require('./searchResult');
const { writeResult } = require('./writeResult');

console.time("parseFile");
const data = parseFile(`probleme/${process.argv[2] || 'test'}`);
console.log(data);
console.timeEnd("parseFile");

console.time("searchResult");
const result = searchResult(data);
console.timeEnd("searchResult");

console.time("writeResult");
writeResult(result, `solution/${process.argv[2] || 'test'}`);
console.timeEnd("writeResult");