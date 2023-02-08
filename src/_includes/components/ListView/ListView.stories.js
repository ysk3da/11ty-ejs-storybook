
import ListViewTemplate from './ListView.ejs';
import './_c-list-view.scss';
import markdown from './ListView.md';

export default {
  title: 'Components/ListViews',
  component: ListViewTemplate,
  argTypes: {
    cardNum: { control: 'number' },
    colNum: { control: 'number' }, // _c-list-view.scss依存 1~10の数字
    ulClassNames: { control: 'text' },
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
  cardNum: 12,
  colNum: 3, // _c-list-view.scss依存 1~10の数字
  ulClassNames: "gx-2p row-cols-md-6",
}