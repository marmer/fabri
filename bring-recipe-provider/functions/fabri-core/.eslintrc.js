module.exports = {
  root: true,
  env: {
    // es6: true,
    node: true,
    // browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
    'jest.config.ts'
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'promise',
    'node'
  ],
  rules: {
    semi: ['error', 'never']
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]

}
