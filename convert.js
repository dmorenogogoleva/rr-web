const pandoc = require('./convert/pandoc');
const convertToPdf = require('./convert/convertToPdf');

pandoc.execute()
convertToPdf.execute()

const fs = require('fs');
const Epub = require("epub-gen");



fs.readFile('./rachreiten.html', 'utf-8', (err, data) => {
  if (err) { throw err; }

  const content = data.split('<h2 id=').map((el) => {
    let title

    const clone = el
    clone.replace(/(?!>)([^><]+)(?=<\/h2>)/, (...res) => {
      title = res[0]
    })

    return {
      title,
      data: el
    }
  })

  const option = {
    title: "Рахрейтен",
    lang: 'ru',
    author: "Дарья Морено-Гоголева",
    cover: "./cover/2.jpg",
    content
  };

  new Epub(option, "path.epub");
})

