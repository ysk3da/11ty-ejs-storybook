
import HogeTemplate from './Hoge.ejs';
import '../../../styles/components/Hoge.scss';
import markdown from './Hoge.md';

export default {
  title: 'Components/Hoges',
  component: HogeTemplate,
  argTypes: {
    label: { control: 'text' },
  },
  parameters: {
    notes: { markdown } // markdown 読み込み
  },
};

export const normal = (args) => {

  let props = args;

  return HogeTemplate({ props }); // 各変数を引数に入れてコンポーネントを表示
};

normal.args = {
  label: 'Hoge',
}