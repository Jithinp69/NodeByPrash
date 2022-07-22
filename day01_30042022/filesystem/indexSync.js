const fs = require('fs');
const fileData = fs.readFileSync('data.txt','utf-8')
console.log(fileData);