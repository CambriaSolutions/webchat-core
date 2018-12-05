module.exports = {
  use: [
    [
      '@neutrinojs/airbnb',
      {
        eslint: {
          rules: {
            semi: 'off',
            indent: 'off',
            'comma-dangle': [
              'warn',
              {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'ignore',
              },
            ],
            'linebreak-style': 0,
            'import/prefer-default-export': 'off',
            'react/jsx-filename-extension': 'off',
            'react/no-array-index-key': 'off',
            'react/prefer-stateless-function': 'off',
            'no-restricted-syntax': 'off',
            'arrow-body-style': 'off',
            'react/prop-types': 'off',
            'no-shadow': 'off',
            'arrow-parens': 'off',
            'object-curly-newline': 'off',
            'guard-for-in': 'off',
            'class-methods-use-this': 'off',
            'function-paren-newline': 'off',
            'no-console': 'warn',
            'no-unused-vars': 'warn',
            'consistent-return': 'warn',
            'max-len': 'warn',
          },
        },
      },
    ],
    [
      '@neutrinojs/react-components',
      {
        html: {
          appMountId: 'cambria-chatframe',
        },
      },
    ],
    '@neutrinojs/jest',
  ],
}
