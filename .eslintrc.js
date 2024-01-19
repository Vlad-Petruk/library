module.exports = {
  env: {
    node: true, // This is for Node.js environments
    es6: true, // This is for ECMAScript 2015 (ES6) and later
  },

  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
