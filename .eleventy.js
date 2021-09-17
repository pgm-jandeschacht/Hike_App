const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter('highlighted', function(blog) {
    return blog.filter(article => article.data.highlighted == true)
  })

  eleventyConfig.addPassthroughCopy({
    'src/main.css': 'assets/main.css',
    'src/images': 'assets/images'
  });
  return {
    dir: {
      input: 'views',
      output: 'docs'
    },
    // pathPrefix: '/my-walking-app/'
  };
};