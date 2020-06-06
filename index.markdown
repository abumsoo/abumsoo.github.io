---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

{% for post in site.posts %}

<div class="post-preview">
    <p>{{ post.date | date: "%b %d, %Y" }}</p>
    <h2>{{ post.title }}</h2>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url }}">
    <span class="box-link"></span>
    </a>
</div>

{% endfor %}
