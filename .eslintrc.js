module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // 'plugin:jest/recommended',
    // 'prettier',
    // 'prettier/react',
    // 'prettier/@typescript-eslint',
    // 'plugin:prettier/recommended'
  ],
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "linebreak-style": 0,
    "arrow-parens": 1,
    "@typescript-eslint/no-shadow": 1,

    "@typescript-eslint/explicit-module-boundary-types": 0,

    // "react/require-default-props": [2, { ignoreFunctionalComponents: true }],
    
  }
};
