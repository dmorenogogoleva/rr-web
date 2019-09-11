var nodePandoc = require('node-pandoc');

var source = './readme.md';

var toEpub = ['-o', 'text/rachreiten.epub', 'readme.md', '--metadata-file=meta.yml', `--epub-cover-image=src/cover/${Math.random() > 0.5 ? 1 : 2}.jpg`]
var toFb2 = ['-f', 'markdown', '-t', 'fb2', '-o', './text/rachreiten.fb2'];
var toHtml = ['-f', 'markdown', '-t', 'html', '-o', './text/rachreiten.html'];

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
    nodePandoc(source, toHtml, errorHandler);
    nodePandoc(source, toFb2, errorHandler);
    nodePandoc(source, toEpub, errorHandler);
  }
};


