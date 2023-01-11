
import TestBtnTemplate from './TestBtn.ejs';
import './_c-test-btn.scss';
import markdown from './TestBtn.md';

export default {
  title: 'Components/TestBtns',
  component: TestBtnTemplate,
  argTypes: {
    label: { control: 'text' },
    type: {
      options: ['submit','reset','button'],
      control: { type: 'radio'}
    },
    disabled: { disable: false },
    modefireClass: { control: 'text' },
    jsClass: { control: 'text' },
  },
  parameters: {
    notes: { markdown } // markdown 読み込み
  },
};

export const normal = (args) => {

  let props = args;

  return TestBtnTemplate({ props }); // 各変数を引数に入れてコンポーネントを表示
};

normal.args = {
  label: 'Click Here',
  type: 'button',
  disabled: false,
  modefireClass: '',
  jsClass: '',
}