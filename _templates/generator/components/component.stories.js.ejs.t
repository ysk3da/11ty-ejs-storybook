---
to: src/_includes/components/<%= name %>/<%= name %>.stories.js
---
<% camelizedName = h.inflection.camelize(name) -%>

import <%= camelizedName %>Template from '<%= name %>.ejs';
import '_<%= name %>.scss';
import markdown from '<%= name %>.md';

export default {
  title: 'Components/<%= camelizedName %>s',
  component: <%= camelizedName %>Template,
  argTypes: {
    label: { control: 'text' },
  },
  parameters: {
    notes: { markdown } // markdown 読み込み
  },
};

export const normal = (args) => {

  let props = args;

  return <%= camelizedName %>Template({ props }); // 各変数を引数に入れてコンポーネントを表示
};

normal.args = {
  label: '<%= name %>',
}