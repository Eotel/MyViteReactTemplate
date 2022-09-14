module.exports = {
  // reactのeslintを適応する
  extends: ["xo-react"],
  rules: {
    // エラーにするルール
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          pascalCase: true,
          camelCase: true,
        },
      },
    ],
    // コンポーネントはarrow関数で定義する
    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function" },
    ],
    // import文で拡張子チェックはいらない
    "import/extensions": "off",
    // React 17以降はJSXの対応済みのための'React'のimportはいらない
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    // 関数の引数は2つまで。3以上だとオブジェクトにしてまとめる
    "max-params": ["error", 2],
  },
  prettier: true,
  space: true
};
