---
to: src/_includes/layouts/<%= name %>/<%= name %>.ejs
---
<%%
if(typeof content === 'undefined') {
  const content = 'コンテンツが入ります';
};
if(typeof title === 'undefined') {
  const title = 'Default title';
};
if(typeof description === 'undefined') {
  const description = 'Default description';
};
if(typeof bodyId === 'undefined') {
  const bodyId = '';
};
if(typeof bodyClassNames === 'undefined') {
  const bodyClassNames = '';
};
-%%>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%%= title %></title>
  <meta name="description" content="<%%= description %>">
  <link ref="stylesheet" href="/css/style.css" />
</head>
<body id="<%%= bodyId %>" class="<%= h.changeCase.param(name) %> <%%= bodyClassNames %>">
  <%#%- include("../components/TheHeader/TheHeader.ejs", {props:{classNames: ""}}) -%>
  <main>
    <%%- content %>
  </main>
  <%#%- include("../components/TheFooter/TheFooter.ejs", {props:{classNames: ""}}) -%>
  <script src="/js/script.js"></script>
</body>
</html>