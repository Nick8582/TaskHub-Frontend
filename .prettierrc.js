export default {
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'es5',
  semi: false,
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: false,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  endOfLine: 'lf',

  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],

  tailwindStylesheet: './src/app/globals.css',
  tailwindFunctions: ['clsx', 'tv', 'cn'],
  tailwindAttributes: ['myClassList', 'className', 'class'],

  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/types$',
    '^@/config$',
    '^@/lib/',
    '^@/hooks/',
    '^@/components/ui/',
    '^@/components/',
    '^@/styles/',
    '^@/app/',
    '^@/',
    '',
    '^[./]',
    '',
    '\\.(scss|css|less)$',
    '\\.(svg|png|jpg|jpeg|gif|webp)$',
    '\\.(json|lang)$',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy', 'classProperties'],
  importOrderTypeScriptVersion: '5.0.0',

  overrides: [
    {
      files: '*.json',
      options: {
        tabWidth: 2,
        singleQuote: false,
      },
    },
    {
      files: '*.md',
      options: {
        tabWidth: 2,
        printWidth: 80,
      },
    },
  ],
}
