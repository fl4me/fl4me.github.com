---
layout: page
title: Welcome!
tagline: Supporting tagline
---
{% include JB/setup %}
# Blogs  <img src="http://www.easyicon.net/api/resizeApi.php?id=566847&size=48" style="margin-top:-60px; margin-right:10px;"/>
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
####  o(╥﹏╥)o   带宽都被室友LOL去了，看慕课还得用CMCC，生无可恋


This is my second time to attempt to modify this file. In fact, I have failed so many times.hope this time everthing's going be fine.
you may also see another test blog of mine, [http://fl4me.github.io/blog/](http://fl4me.github.io/blog/) ,which is completed by my hand with github's page launcher.
