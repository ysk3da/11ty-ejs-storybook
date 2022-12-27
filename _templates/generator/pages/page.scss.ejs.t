---
to: src/styles/pages/_<%= name %>.scss
---
<% underscoredName = h.inflection.underscore(name) -%>
.<%= underscoredName %> {
  width: 100%;
}