---
to: '<%= have_style? `src/pages/${page_name}/_page-${h.changeCase.param(page_name)}.scss` : null %>'
---
.page-<%= h.changeCase.param(name) %> {
  width: 100%;
}