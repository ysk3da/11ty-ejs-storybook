---
to: src/_includes/layouts/<%= name %>/<%= name %>.ejs
---
<% underscoredName = h.inflection.underscore(name) -%>
---
title: Default title
description: Default description
bodyId:
bodyClassNames:
---
<%
if(typeof props === 'undefined') var props = {};
if(typeof content === 'undefined') var content = 'コンテンツが入ります';
%>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%%= title %></title>
  <meta name="description" content="<%%= description %>">
  <link ref="stylesheet" href="<%%= "/css/global.css" || rev %>" />
</head>
<body id="<%%= bodyId %>" class="<%= underscoredName %> <%%= bodyClassNames %>">
  <%#%- include("../components/TheHeader/TheHeader.ejs", {props:{classNames: ""}}) %>
  <main>
    <%%= props.label %>
    <%%- content %>
  </main>
  <%#%- include("../components/TheFooter/TheFooter.ejs", {props:{classNames: ""}}) %>
  <script src="/js/script.js"></script>
</body>
</html>