---
to: src/pages/<%= name %>/<%= name %>.ejs
---
<#% underscoredName = h.inflection.underscore(name) -%>
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
bodyId: <%= h.changeCase.param(name) %>
bodyClassNames: <%= h.changeCase.param(name) %>
permalink: <%= h.changeCase.param(name) %>.html
date: <%= today %>
---
<div class="<%= h.changeCase.param(name) %>">
  <%= name %>
</div>