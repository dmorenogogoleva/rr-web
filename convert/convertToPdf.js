const mdpdf = require('mdpdf');
const path = require('path');

let options = {
  source: path.join(__dirname, '../readme.md'),
  destination: path.join(__dirname, '../text/rachreiten.pdf'),
  styles: path.join(__dirname, './pdf-styles.css'),
  pdf: {
    format: 'A4',
    orientation: 'portrait'
  }
};


module.exports = {
  name: 'convertToPdf',
  execute() {
    mdpdf.convert(options).then((pdfPath) => {
      console.log('PDF Path:', pdfPath);
    }).catch((err) => {
      console.error(err);
    });
  }
}