module.exports = {
   ...require('config/eslint-preset.js'),
   extends: ['next/babel', 'next/core-web-vitals'],
   parserOptions: {
      tsconfigRootDir: __dirname,
      project: './tsconfig.json',
   },
}
