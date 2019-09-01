var nodePandoc = require('node-pandoc');

var source = './readme.md';

var toFb2 = ['-f', 'markdown', '-t', 'fb2', '-o', 'text/rachreiten.fb2'];
var toHtml = ['-f', 'markdown', '-t', 'html', '-o', 'text/rachreiten.html'];

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
    nodePandoc(source, toFb2, errorHandler);
    nodePandoc(source, toHtml, errorHandler);
  }
};


