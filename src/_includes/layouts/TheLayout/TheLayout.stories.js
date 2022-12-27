
import TheLayoutTemplate from './TheLayout.ejs';
import '../../../styles/layouts/_TheLayout.scss';
import markdown from './TheLayout.md';

export default {
  title: 'Layouts/TheLayouts',
  component: TheLayoutTemplate,
  argTypes: {
    label: { control: 'text' },
  },
  parameters: {
    notes: { markdown } // markdown 読み込み
  },
};

export const normal = (args) => {

  let props = args;

  return TheLayoutTemplate({ props }); // 各変数を引数に入れてコンポーネントを表示
};

normal.args = {
  label: 'TheLayout',
}