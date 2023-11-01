module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: "airbnb-base",
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        ".eslintrc.{js,cjs}"
      ],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  "ignorePatterns": [
    "bas_scripts/modules/compiled/AccountProfileMaker/AccountProfileMaker/*.js"
  ],
  rules: {
    "no-console": "off", // Allow the use of console.log
    semi: ["error", "never"], // Disallow semicolons as the end of statements,
    "comma-dangle": "off" // Disallow trailing commas in an object and array literals
  }
};
