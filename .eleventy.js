const path = require("path");
const pluginRev = require("eleventy-plugin-rev");
const eleventySass = require("eleventy-sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");

module.exports = function (eleventyConfig) {
  // Add a filter using the Config API
  // eleventyConfig.addTransform('htmlmin', function (content, outputPath) {})

  eleventyConfig.addPlugin(pluginRev);
  eleventyConfig.addPlugin(eleventySass, [
    {
      postcss: postcss([autoprefixer]),
    },
    {
      // revision は ejs だと render時にcofig情報をコンパイルしないので諦め
      rev: false,
    },
    {
      compileOptions: {
        permalink: function(contents, inputPath) {
          let parsed = path.parse(inputPath);
          // console.log({parsed});
          if(parsed.name.startsWith("_")) {
            return false;
          }
          return (data) => {
            // console.log({data});
            return data.page.filePathStem.replace(/^\/styles\//, "/css/") + ".css";
          };
        }
      },
      sass: {
        style: "compressed",
        sourceMap: true
      },
    },
  ]);

  // Copy `src/img/` to `dist/img`
  eleventyConfig.addPassthroughCopy("src/img");
  // Copy `src/styles/` to `dist/css`
  // eleventyConfig.addPassthroughCopy({"src/styles": "css"});
  // Copy `src/scripts/` to `dist/js`
  eleventyConfig.addPassthroughCopy({"src/scripts": "js"});

  // ejs offcial for customize
  // let ejs = require("ejs");
  // eleventyConfig.setLibrary("ejs", ejs);


  // You can return your Config object (optional).
  return {
    templateFormats: [
      "ejs",
    ],
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
