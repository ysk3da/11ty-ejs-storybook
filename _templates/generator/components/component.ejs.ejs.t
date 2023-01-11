---
to: src/_includes/components/<%= name %>/<%= name %>.ejs
---
<%%
if(typeof props === 'undefined') {
  const props = {}
}
-%%>
<div class="c-<%= h.changeCase.param(name) %>">
  <%%= props.label %> component
</div>
