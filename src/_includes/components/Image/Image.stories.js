
import ImageTemplate from './Image.ejs';
import './_c-image.scss';
import markdown from './Image.md';

export default {
  title: 'Components/Images',
  component: ImageTemplate,
  argTypes: {
    label: { control: 'text' },
  },
  parameters: {
    notes: { markdown } // markdown 読み込み
  },
};

export const normal = (args) => {

  let props = args;

  return ImageTemplate({ props }); // 各変数を引数に入れてコンポーネントを表示
};

normal.args = {
  label: 'Image',
}