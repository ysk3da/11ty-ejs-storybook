import MyButton from './MyButton.ejs'; // コンポーネントを読み込む
import '../../../styles/components/_MyButton.scss';
import markdown from './MyButton.md';

export default {
  title: 'Components/MyButton', // storybookでリストに表示されるタイトル名
  component: MyButton, // importしたコンポーネント
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

  return MyButton({ props }); // 各変数を引数に入れてコンポーネントを表示
};

normal.args = {
  label: 'Click Here',
  type: 'button',
  disabled: false,
  modefireClass: '',
  jsClass: '',
}