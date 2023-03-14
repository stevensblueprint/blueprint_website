module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:cypress/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "jest", "prettier"],
  rules: {
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: false, optionalDependencies: false, peerDependencies: false },
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
  },
};
