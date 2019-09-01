const fs = require('fs');
const Epub = require("epub-gen");

const convert = () => {
  fs.readFile('text/rachreiten.html', 'utf-8', (err, data) => {
    if (err) { throw err; }
  
    const content = data.split('<h2>').map((el) => {
      // const clone = el
      // clone.replace(/(?!>)([^><]+)(?=<\/h2>)/, (...res) => {
      //   title = res[0]
      // })
  
      // eslint-disable-next-line no-control-regex
      const clean = el.replace(/[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm, '')

      return {
        data: clean,
      }
    })
  
    const option = {
      title: "Рахрейтен",
      css: '*{font-style: normal;}',
      tocTitle: '',
      // fonts: ['/src/fonts/Montserrat-Medium.ttf', '/src/fonts/Montserrat-Regular.ttf', '/src/fonts/SourceSansPro-Regular.ttf', '/src/fonts/SourceSansPro-SemiBold.ttf'],
      lang: 'ru',
      author: "Дарья Морено-Гоголева",
      cover: `./cover/${Math.random() > 0.5 ? 1 : 2}.jpg`,
      content
    };
  
    new Epub(option, "text/rachreiten.epub").catch(er => console.log(`error: ${er}`));
  })
}



module.exports = {
  name: 'convertToEpub',
  execute() {
    convert()
  }
}