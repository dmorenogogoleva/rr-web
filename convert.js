const pandoc = require('./convert/pandoc');
const convertToPdf = require('./convert/convertToPdf');

pandoc.execute()
convertToPdf.execute()
