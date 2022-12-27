---
to: src/styles/layouts/_<%= name %>.scss
---
<% underscoredName = h.inflection.underscore(name) -%>

.<%= underscoredName %> {
  width: 100%;
}