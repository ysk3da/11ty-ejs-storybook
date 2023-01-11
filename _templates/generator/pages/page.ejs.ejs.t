---
to: src/pages/<%= name %>/<%= name %>.ejs
---
<%
var dt = new Date();
var y = dt.getFullYear();
var m = ("00" + (dt.getMonth()+1)).slice(-2);
var d = ("00" + (dt.getDate())).slice(-2);
var today = y + "-" + m + "-" + d;
-%>
---
layout: layouts/TheLayout/TheLayout.ejs
title: <%= name %>のタイトル
description: <%= name %>の概要
bodyId: pageid-<%= h.changeCase.param(name) %>
permalink: <%= h.changeCase.param(name) %>.html
date: <%= today %>
---
<div class="page-<%= h.changeCase.param(name) %>">
  <%= name %>
</div>