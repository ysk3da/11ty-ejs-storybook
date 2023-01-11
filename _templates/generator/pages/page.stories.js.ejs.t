---
to: '<%= have_story? `src/pages/${page_name}/${page_name}.stories.js` : null %>'
---
<% camelizedName = h.inflection.camelize(page_name) -%>
<% underscoredName = h.inflection.underscore(page_name) -%>
import <%= camelizedName %> from '../../../dist/<%= h.changeCase.param(page_name) %>.html';
<%=  have_style? `import './_page-${h.changeCase.param(page_name)}.scss';` : null -%>
import markdown from './<%= page_name %>.md';

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
