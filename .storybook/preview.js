import { addDecorator } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y'; //全てのコンポーネントで反映させるため、ここでimport
// import '../src/scss/css/bundle.scss'; // グローバルスタイル

addDecorator(withA11y);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}