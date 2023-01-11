---
to: src/pages/<%= page_name %>/<%= page_name %>.ejs
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
title: <%= page_name %>のタイトル
description: <%= page_name %>の概要
bodyId: pageid-<%= h.changeCase.param(page_name) %>
permalink: <%= h.changeCase.param(page_name) %>.html
date: <%= today %>
---
<div class="page-<%= h.changeCase.param(page_name) %>">
  <%= page_name %>
</div>