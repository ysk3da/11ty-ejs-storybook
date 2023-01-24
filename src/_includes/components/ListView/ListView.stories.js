
import ListViewTemplate from './ListView.ejs';
import './_c-list-view.scss';
import markdown from './ListView.md';

export default {
  title: 'Components/ListViews',
  component: ListViewTemplate,
  argTypes: {
    label: { control: 'text' },
  },
  parameters: {
    notes: { markdown } // markdown 読み込み
  },
};

export const normal = (args) => {

  let props = args;

  return ListViewTemplate({ props }); // 各変数を引数に入れてコンポーネントを表示
};

normal.args = {
  label: 'ListView',
}