module.exports = function (eleventyConfig) {
  // Add a filter using the Config API
  // eleventyConfig.addTransform('htmlmin', function (content, outputPath) {})

  // ejs offcial for customize
  let ejs = require("ejs");
  eleventyConfig.setLibrary("ejs", ejs);

  // Copy `src/img/` to `dist/img`
  eleventyConfig.addPassthroughCopy("src/img");
  // Copy `src/styles/` to `dist/css`
  eleventyConfig.addPassthroughCopy({"src/styles": "css"});
  // Copy `src/scripts/` to `dist/js`
  eleventyConfig.addPassthroughCopy({"src/scripts": "js"});

  // You can return your Config object (optional).
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
