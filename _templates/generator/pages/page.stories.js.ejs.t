---
to: src/pages/<%= name %>/<%= name %>.stories.js
---
<% camelizedName = h.inflection.camelize(name) -%>
<% underscoredName = h.inflection.underscore(name) -%>
import <%= camelizedName %> from '../../../dist/<%= h.changeCase.param(name) %>.html';
import markdown from './<%= name %>.md';

export default {
  title: 'Pages/<%= camelizedName %>',
  component: <%= camelizedName %>,
  parameters: {
    notes: { markdown } // markdown 読み込み
  },
};

export const <%= underscoredName %> = () => {
  return <%= camelizedName %>;
};
