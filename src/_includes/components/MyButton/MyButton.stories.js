import MyButton from './MyButton.ejs'; // コンポーネントを読み込む
import '../../../styles/components/MyButton.scss';

const readme = ` // @storybook/addon-storysource用の記述
## Props
- label
  - 初期値: ''
- type
  - 初期値: 'button'
- disabled
  - 初期値: false
- modefireClass
  - modefire用のクラス付与
  - 初期値: ''
- jsClass
  - JavaScript用のクラス付与
  - 初期値: ''

## 関連コンポーネント
なし
`;

export default {
  title: 'MyButton', // storybookでリストに表示されるタイトル名
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
    notes: readme // readme読み込み
  },
};

export const nomal = (args) => {

  let props = args;

  return MyButton({ props }); // 各変数を引数に入れてコンポーネントを表示
};

nomal.args = {
  label: 'Click Here',
  type: 'button',
  disabled: false,
  modefireClass: '',
  jsClass: '',
}