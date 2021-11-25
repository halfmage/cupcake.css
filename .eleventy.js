module.exports = function(eleventyConfig) {

  // watch target for quick previews
  eleventyConfig.addWatchTarget("src/css/*.css");

  // export core cupcake.css
  eleventyConfig.addPassthroughCopy({"src/css/cupcake.css" : "./cupcake.css"});

  // export for flavors for later
  // eleventyConfig.addPassthroughCopy({"./cupcake-brownie.css" : "cupcake-brownie.css"});

  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "layouts",
      includes: "includes",
    },
    htmlTemplateEngine: "njk"
  }
  
};