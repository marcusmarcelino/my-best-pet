
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    "space-before-function-paren": "error",
    "react/prop-types": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": ["error"]
      }
    }
  ],
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect',
    },
  }
}
