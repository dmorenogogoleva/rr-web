var nodePandoc = require('node-pandoc');

var source = './readme.md';

// var toEpub = ['-o', 'text/rachreiten.epub', 'readme.md', '--metadata-file=meta.yml',  '--toc', '--toc-depth=2', '--epub-cover-image=./cover/1.jpg', '--css=src/styles/text/pdf-styles.css']
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


