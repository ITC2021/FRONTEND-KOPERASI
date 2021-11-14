// .eslintrc.js
module.exports = {
    root: false,
    env: {
      node: false
    },
    extends: [],
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    },
  };