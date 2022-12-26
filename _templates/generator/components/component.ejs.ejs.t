---
to: src/_includes/components/<%= name %>/<%= name %>.ejs
---
<%%
if(typeof props === 'undefined') {
  const props = {}
}
%>
<p><%= name %> component</p>
<%% props.label %>