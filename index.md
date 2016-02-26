---
layout: page
title: Welcome
tagline: personal blog
---
{% include JB/setup %}
![](http://img4.3lian.com/sucai/img6/230/29.jpg)
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

