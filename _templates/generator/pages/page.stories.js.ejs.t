---
to: src/pages/<%= name %>/<%= name %>.stories.js
---
<% camelizedName = h.inflection.camelize(name) -%>
<% underscoredName = h.inflection.underscore(name) -%>
import <%= camelizedName %> from '../../../dist/<%= underscoredName %>.html';
import '../../styles/pages/_<%= name %>.scss';
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