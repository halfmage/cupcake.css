module.exports = function(eleventyConfig) {

  // watch target for quick previews
  eleventyConfig.addWatchTarget("./*.css");

  // export core cupcake.css
  eleventyConfig.addPassthroughCopy({"./cupcake.css" : "cupcake.css"});

  // export for flavors
  eleventyConfig.addPassthroughCopy({"./cupcake-brownie.css" : "cupcake-brownie.css"});
  
};