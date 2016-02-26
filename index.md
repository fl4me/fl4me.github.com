---
layout: page
title: Welcome
tagline: personal blog
---
{% include JB/setup %}
<div class="container">
	<img src="http://www.bz55.com/uploads/allimg/150309/139-150309101A0.jpg"/>
</div>
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

