
import MixBlendModeTemplate from './MixBlendMode.ejs';
import './_c-mix-blend-mode.scss';
import markdown from './MixBlendMode.md';

export default {
  title: 'Components/MixBlendModes',
  component: MixBlendModeTemplate,
  argTypes: {
    label: { control: 'text' },
  },
  parameters: {
    notes: { markdown } // markdown 読み込み
  },
};

export const normal = (args) => {

  let props = args;

  return MixBlendModeTemplate({ props }); // 各変数を引数に入れてコンポーネントを表示
};

normal.args = {
  label: 'MixBlendMode',
}