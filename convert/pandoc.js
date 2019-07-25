var nodePandoc = require('node-pandoc');

var source = './readme.md';


var toDocx = ['-f', 'markdown', '-t', 'docx', '-o', 'src/text/rachreiten.docx'];
var toEpub = ['-f', 'markdown', '-t', 'epub', '-o', 'src/text/rachreiten.epub'];
var toFb2 = ['-f', 'markdown', '-t', 'fb2', '-o', 'src/text/rachreiten.fb2'];

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
    nodePandoc(source, toFb2, errorHandler);
  }
};


