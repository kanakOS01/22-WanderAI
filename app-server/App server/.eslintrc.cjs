module.exports = {
  "root": true,
  "env": {
    "node": true,
    "es2020": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "ignorePatterns": ["dist", ".eslintrc.cjs"],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "plugins": [],
  "rules": {
    "strict": ["error", "safe"],
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "no-unused-vars": "error"
  }
};
