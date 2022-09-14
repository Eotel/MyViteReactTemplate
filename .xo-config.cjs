module.exports = {
  // reactのeslintを適応する
  extends: ['xo-react'],
  prettier: true,
  rules: {
    'unicorn/no-abusive-eslint-disable': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          pascalCase: true,
          camelCase: true,
          kebabCase: true,
        },
      },
    ],
    'n/file-extension-in-import': 'off',
    'import/extensions': 'off',
    // コンポーネントはarrow関数で定義する
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
    // React 17以降はJSXの対応済みのための'React'のimportはいらない
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // 関数の引数は2つまで。3以上だとオブジェクトにしてまとめる
    'max-params': ['error', 2],
  },
  space: true,
};
