var nodePandoc = require('node-pandoc');

var source = './readme.md';

var getCoverNum = function() {
  const num = Math.random();
  
  if (num < 0.33) {
    return 1
  }

  if (num < 0.66) {
    return 2
  }

  if (num < 1) {
    return 3
  }
}

var toEpub = ['-o', 'text/rachreiten.epub', 'readme.md', '--metadata-file=meta.yml', `--epub-cover-image=src/cover/${getCoverNum()}.jpg`]
var toFb2 = ['-f', 'markdown', 'readme.md', '-t', 'fb2', '-o', './text/rachreiten.fb2'];
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


