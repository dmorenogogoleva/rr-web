var nodePandoc = require('node-pandoc');

var source = './readme.md';


var toDocx = ['-f', 'markdown', '-t', 'docx', '-o', 'text/rachreiten.docx'];
var toEpub = ['-f', 'markdown', '-t', 'epub', '-o', 'text/rachreiten.epub'];

var errorHandler = function (err, result) {

  if (err) {
    console.error('Oh Nos: ', err);
  }

  console.log(result);
  return result;
};

module.exports = {
  name: 'pandoc',
  execute() {
    nodePandoc(source, toEpub, errorHandler);
    nodePandoc(source, toDocx, errorHandler);
  }
};


