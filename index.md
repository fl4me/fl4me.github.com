---
layout: page
title: Welcome!
tagline: Supporting tagline
---
{% include JB/setup %}
## Post Area

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

##  final words

This is my second time to attempt to modify this file. In fact, I have failed so many times.hope this time everthing's going be fine.

you may also see another test blog of mine, [http://fl4me.github.io/qinShare/](http://fl4me.github.io/qinShare/) ,which is completed only with github,s page launcher.



