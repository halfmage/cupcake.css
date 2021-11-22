module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./*.css");
  eleventyConfig.addPassthroughCopy({"./cupcake.css" : "cupcake.css"});
  eleventyConfig.addPassthroughCopy({"./cupcake-light.css" : "cupcake-light.css"});
};