module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("to_json", (value, indent = 2) =>
    JSON.stringify(value, null, indent)
  );

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
