---
to: src/_includes/layouts/<%= layout_name %>/<%= layout_name %>.stories.js
---
<% camelizedName = h.inflection.camelize(layout_name) -%>

import <%= camelizedName %>Template from './<%= layout_name %>.ejs';
<%=  have_style? `import './_l-${h.changeCase.param(layout_name)}.scss';` : null -%>
import markdown from './<%= layout_name %>.md';

export default {
  title: 'Layouts/<%= camelizedName %>s',
  component: <%= camelizedName %>Template,
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

  return <%= camelizedName %>Template({ ...args }); // 各変数を引数に入れてコンポーネントを表示
};

normal.args = {
  content: 'コンテンツが入ります',
  title: 'Default title',
  description: 'Default description',
  bodyId: '',
  bodyClassNames: '',
}