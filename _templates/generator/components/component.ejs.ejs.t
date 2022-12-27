---
to: src/_includes/components/<%= name %>/<%= name %>.ejs
---
<% underscoredName = h.inflection.underscore(name) -%>

<%%
if(typeof props === 'undefined') {
  const props = {}
}
-%%>
<div class="<%= underscoredName %>">
  <%%= props.label %> component
</div>
