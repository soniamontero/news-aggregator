module.exports = {
  root: true,
  extends: ["react-app"],
  env: {
    es6: true,
    node: true
  },
  ignorePatterns: ["node_modules", "build"],
  rules: {
    curly: 0,
    "import/no-anonymous-default-export": 0,
    "import/no-default-export": 0,
    "react-native/no-inline-styles": 0,
    "react-hooks/exhaustive-deps": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "react/no-unescaped-entities": [
      "error",
      {
        forbid: [">", "}"]
      }
    ],
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: false
      }
    ],
    "jsx-quotes": ["error", "prefer-double"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "never"],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "none",
        singleQuote: false,
        jsxSingleQuote: false,
        printWidth: 120,
        semi: true,
        jsxBracketSameLine: true,
        arrowParens: "avoid"
      }
    ]
  },
  plugins: [
    "prettier",
    "react",
    "jsx-a11y",
    "eslint-plugin-prettier",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks"
  ]
};
