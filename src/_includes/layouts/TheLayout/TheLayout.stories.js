
import TheLayoutTemplate from './TheLayout.ejs';
import '../../../styles/layouts/_TheLayout.scss';
import markdown from './TheLayout.md';

export default {
  title: 'Layouts/TheLayouts',
  component: TheLayoutTemplate,
  argTypes: {
    content: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    bodyId: { control: 'text' },
    bodyClassNames: { control: 'text' },
  },
  parameters: {
    notes: { markdown } // markdown 読み込み
  },
};

export const normal = (args) => {

  return TheLayoutTemplate({ ...args }); // 各変数を引数に入れてコンポーネントを表示
};

normal.args = {
  content: 'コンテンツが入ります',
  title: 'Default title',
  description: 'Default description',
  bodyId: '',
  bodyClassNames: '',
}