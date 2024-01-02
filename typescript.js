module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'prefer-arrow'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-useless-catch': ['error'],
    'no-useless-escape': ['off'],
    'quote-props': ['error', 'as-needed'],
    'no-new': ['error'],
    'linebreak-style': ['error', 'unix'],
    'object-shorthand': 'error',
    yoda: 'error',
    curly: 'off',
    'no-bitwise': 'off',
    'no-debugger': 'error',
    'no-redeclare': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-invalid-this': 'warn',
    'no-shadow': ['warn', {hoist: 'all'}],
    'no-var': ['error'],
    radix: 'error',
    eqeqeq: ['error', 'always'],
    'arrow-parens': ['off', 'as-needed'],
    'spaced-comment': ['off', 'never'],
    'newline-before-return': ['off'],
    'newline-per-chained-call': 'off',
    'new-parens': 'off',
    'no-multiple-empty-lines': 'error',
    'no-irregular-whitespace': 'off',
    'no-trailing-spaces': 'error',
    semi: ['error', 'never'],
    'space-before-function-paren': 'off',
    'prefer-const': ['warn'],
    'comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/await-thenable': ['error'],
    '@typescript-eslint/no-for-in-array': ['error'],
    '@typescript-eslint/no-misused-promises': ['warn'],
    '@typescript-eslint/no-unnecessary-type-assertion': ['off'],
    '@typescript-eslint/prefer-includes': ['warn'],
    '@typescript-eslint/prefer-regexp-exec': ['warn'],
    '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
    'require-await': ['off'],
    '@typescript-eslint/require-await': ['warn'],
    '@typescript-eslint/unbound-method': ['off'],
    'prefer-rest-params': ['warn'],
    'prefer-spread': ['error'],
    '@typescript-eslint/adjacent-overload-signatures': ['error'],
    '@typescript-eslint/ban-ts-comment': ['warn'],
    '@typescript-eslint/ban-types': ['error'],
    '@typescript-eslint/naming-convention': ['warn'],
    '@typescript-eslint/consistent-type-assertions': ['error'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {delimiter: 'none', requireLast: true},
        singleline: {delimiter: 'semi', requireLast: false},
      },
    ],
    'no-array-constructor': ['off'],
    '@typescript-eslint/no-array-constructor': ['error'],
    'no-empty-function': ['off'],
    '@typescript-eslint/no-empty-function': ['error'],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/no-inferrable-types': ['off'],
    '@typescript-eslint/no-misused-new': ['error'],
    '@typescript-eslint/no-namespace': ['error'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-this-alias': ['error'],
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-use-before-define': ['off'],
    '@typescript-eslint/no-var-requires': ['error'],
    '@typescript-eslint/prefer-namespace-keyword': ['error'],
    '@typescript-eslint/triple-slash-reference': ['error'],
    '@typescript-eslint/type-annotation-spacing': ['warn'],
    'constructor-super': 'error',
    'for-direction': ['error'],
    'getter-return': ['error'],
    'no-async-promise-executor': ['warn'],
    'no-case-declarations': ['off'],
    'no-class-assign': ['error'],
    'no-compare-neg-zero': ['error'],
    'no-cond-assign': 'off',
    'no-const-assign': ['error'],
    'no-constant-condition': ['error'],
    'no-control-regex': ['error'],
    'no-delete-var': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-class-members': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': 'error',
    'no-empty-character-class': ['error'],
    'no-empty-pattern': ['error'],
    'no-ex-assign': ['warn'],
    'no-extra-boolean-cast': ['error'],
    'no-fallthrough': 'off',
    'no-func-assign': ['error'],
    'no-global-assign': ['error'],
    'no-inner-declarations': ['error'],
    'no-invalid-regexp': ['error'],
    'no-misleading-character-class': ['error'],
    'no-mixed-spaces-and-tabs': ['error'],
    'no-new-symbol': ['error'],
    'no-obj-calls': ['error'],
    'no-octal': ['error'],
    'no-prototype-builtins': ['off'],
    'no-regex-spaces': ['error'],
    'no-self-assign': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-sparse-arrays': 'error',
    'no-this-before-super': ['error'],
    'no-undef': ['off'],
    'no-unexpected-multiline': ['error'],
    'no-unreachable': ['error'],
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': ['error'],
    'no-unused-labels': 'error',
    'no-with': ['error'],
    'require-yield': ['error'],
    'use-isnan': 'error',
    'valid-typeof': 'off',
    '@typescript-eslint/array-type': ['error', {default: 'generic'}],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-member-accessibility': ['off', {accessibility: 'explicit'}],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/quotes': ['error', 'single',{avoidEscape: true, allowTemplateLiterals: true}],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/unified-signatures': 'error',
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',
    complexity: 'off',
    'dot-notation': 'off',
    'eol-last': 'error',
    'id-blacklist': ['error'],
    'id-match': 'error',
    'import/no-extraneous-dependencies': ['error', {devDependencies: false}],
    'import/no-internal-modules': 'off',
    'import/order': 'error',
    'max-classes-per-file': 'off',
    'max-len': ['warn', {code: 120}],
    'no-caller': 'error',
    'no-console': 'off',
    'import/no-duplicates': 'error',
    'no-extra-bind': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'warn',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'error',
    'one-var': ['error', 'never'],
    'padding-line-between-statements': ['off', {blankLine: 'always', prev: '*', next: 'return'}],
    'prefer-object-spread': 'error',
  },
  settings: {},
}
