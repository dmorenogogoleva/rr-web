const pandoc = require('./convert/pandoc');
const convertToPdf = require('./convert/convertToPdf');
const convertToEpub = require('./convert/convertToEpub');

convertToPdf.execute()
pandoc.execute()

setTimeout(() => {
  convertToEpub.execute()
}, 1000)
