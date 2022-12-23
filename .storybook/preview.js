// import '../src/scss/css/bundle.scss'; // グローバルスタイル

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    element: '#storybook-root',
    config: {},
    options: {},
    manual: true,
  },
}