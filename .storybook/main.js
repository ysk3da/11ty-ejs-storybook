const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: /\.ejs$/,
        use: ['ejs-compiled-loader'],
        // 読み込む予定のEJSのディレクトリを指定する
        include: path.resolve(__dirname, '../src/')
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
    );

    return config;
  },
  staticDirs: [
    { from: '../dist/css', to: '/css' },
    { from: '../dist/js', to: '/js' },
    { from: '../dist/img', to: '/img' }
  ],
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // added
    '@storybook/addon-a11y',
    // '@storybook/addon-controls',
    '@storybook/addon-storysource',
    '@storybook/addon-notes/register',
    '@storybook/addon-postcss'
  ],
  "framework": "@storybook/html",
  core: {
    builder: {
      name: 'webpack5',
      options: {
        fsCache: true,
      },
    },
  },
}