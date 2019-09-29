const pandoc = require('simple-pandoc');
const fs = require('fs');

var getCoverNum = function() {
  const num = Math.random();

  if (num < 0.33) {
    return 1;
  }

  if (num < 0.66) {
    return 2;
  }

  if (num < 1) {
    return 3;
  }
};

const input = fs.createReadStream('readme.md');

const mdToFb2 = pandoc('markdown', 'fb2');
const mdToEpub = pandoc(
  'markdown',
  'epub',
  '--metadata-file=meta.yml',
  `--epub-cover-image=src/cover/${getCoverNum()}.jpg`,
);

const outputfb2 = fs.createWriteStream('./text/rachreiten.fb2');
const outputEpub = fs.createWriteStream('./text/rachreiten.epub');

module.exports = {
  name: 'pandoc',
  execute() {
    mdToFb2.stream(input).pipe(outputfb2);
    mdToEpub.stream(input).pipe(outputEpub);
  },
};
