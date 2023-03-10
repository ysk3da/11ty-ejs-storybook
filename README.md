# 11ty (ejs) + storybook

11ty (ejs) + storybook

## install 11ty

[GETTING STARTED](https://www.11ty.dev/docs/getting-started/)

```shell
# init
npm init -y

# install
npm install --save-dev @11ty/eleventy

# test
npx @11ty/eleventy
```

ディレクトリ構造は下記

```shell
.
├── README.md
├── node_modules # node modules
├── .eleventy.js # 11ty setting file
├── package-lock.json
├── package.json
└── src
    ├── _data # data file. eg json file etc.
    ├── _includes # components, layouts, libraries
    ├── img # image assets
    ├── pages # page files
    ├── scripts # script files
    └── styles # style files
```

## install storybook

```shell
npx -p @storybook/cli sb init --type html
```

npm v8 を利用しているが、 npm v7 で利用せよとのことで、
migration 設定が、`.npmrc`に入っている

## ejsが利用できるように storybookを設定する

【参考】: [EJS de Storybook入門](https://qiita.com/nokonokojr/items/1fd879a392c165651bf6)

ejsのローダーをインストールする

```shell
npm install ejs-compiled-loader
```

`.storybook/main.js`に設定を追加する

```js
const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {

    config.module.rules.push(
      {
        test: /\.ejs$/,
        loaders: ['ejs-compiled-loader'],
        // 読み込む予定のEJSのディレクトリを指定する
        include: path.resolve(__dirname, '../src/_includes/components/**/')
      }
    );

    return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/html"
};
```

## storybookにSCSSを反映する


```shell
npm install style-loader@2.0.0 css-loader@5.2.6 sass-loader@10.0.0

npm i sass
```

## storybookのアドオンを追加する

変更点

@storybook/addon-knobs
→
@storybook/addon-controls

```shell
npm i -D @storybook/addon-a11y @storybook/addon-controls @storybook/addon-notes @storybook/addon-storysource
```

これも追加せよとのこと

@storybook/addon-postcss

## webpack5

```
npm i -D @storybook/builder-webpack5 @storybook/manager-webpack5
```

## hygenの導入

[Hygen Docs](https://www.hygen.io/docs/quick-start)

[hygen で生成 - 対話形式の Component 雛形 -](https://zenn.dev/takepepe/articles/hygen-template-generator)

[hygenで分岐する選択肢を作成する](https://qiita.com/ikea_shark_jk/items/bb50dc60edc3aee95d3c)

[[Vue.js] Hygenで作るコンポーネントジェネレーター](https://tenderfeel.xsrv.jp/javascript/4244/)

## Dart Sassのためのファイル構成の考察

[Sassで@useと@forwardを使ったサイト設計 - @importから切り替える手順](https://yumegori.com/dart-sass-method)

[[CSS設計] 私のためのFLOCSSまとめ](https://qiita.com/super-mana-chan/items/644c6827be954c8db2c0)

## Reference

[EJS de Storybook入門](https://qiita.com/nokonokojr/items/1fd879a392c165651bf6)


## memo

### project root の alias 設定

- [TypeScript + Gatsby + Storybook環境でimport aliasを利用する](https://tamalog.szmd.jp/storybook-absolute-imports/)

--> eleventy-sass側が公式が用意がないので諦め