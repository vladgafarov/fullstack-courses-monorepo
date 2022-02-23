module.exports = {
   extends: ['next', 'prettier', 'next/babel'],
   settings: {
      next: {
         rootDir: ['apps/*/', 'packages/*/'],
      },
   },
   rules: {
      '@next/next/no-html-link-for-pages': 'off',
   },
}
