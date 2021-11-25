const pandoc = require('./convert/pandoc');
const convertToPdf = require('./convert/convertToPdf');

convertToPdf.execute();
pandoc.execute();
console.log('angelina')
