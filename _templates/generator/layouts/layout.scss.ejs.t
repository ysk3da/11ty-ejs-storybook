---
to: '<%= have_style? `src/_includes/layouts/${layout_name}/_l-${h.changeCase.param(layout_name)}.scss` : null %>'
---
.l-<%= h.changeCase.param(layout_name) %> {
  width: 100%;
}