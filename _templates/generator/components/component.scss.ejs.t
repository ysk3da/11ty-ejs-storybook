---
to: src/styles/components/_<%= name %>.scss
---
<% underscoredName = h.inflection.underscore(name) -%>

.<%= underscoredName %> {
  width: 100%;
}