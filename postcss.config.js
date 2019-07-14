module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nesting'),
    require('postcss-custom-media')({
      importFrom: './src/styles/scaffolding/media.css'
    }),
    require('postcss-preset-env')
  ]
}
