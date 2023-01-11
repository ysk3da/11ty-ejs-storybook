---
to: src/_includes/layouts/<%= name %>/<%= name %>.stories.js
---
<% camelizedName = h.inflection.camelize(name) -%>

import <%= camelizedName %>Template from './<%= name %>.ejs';
import './_<%= name %>.scss';
import markdown from './<%= name %>.md';

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