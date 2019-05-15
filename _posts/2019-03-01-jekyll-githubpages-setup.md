---
layout: page
title: "Setting up Jekyll"
author: Bum Kim
---

Here's what I did on an Arch Linux install to set up Jekyll and get this post up.

```zsh
$ pacman -S ruby
$ gem install jekyll bundler
```

I threw the following into my .zshrc

```zsh
path+=("$(ruby -e 'print Gem.user_dir')/bin")
export PATH
```

Updating the path enabled me to use the bundle and jekyll commands.

```zsh
$ bundle install
$ jekyll new thisBlog
$ jekyll serve
```

You can open your new blog at [http://localhost:4000](http://localhost:4000) in
a browser.

This should set you up with an example of a blog post and an about page. At this
point I would recommend just tinkering with the examples to see what Jekyll can
do. If you have an idea of what you want to do with your blog, you can just
reshape the examples into the kind of blog that you would like to have.

After I got Jekyll set up, my first changes were to:
+ the title of my website
+ my contact info
+ footer description
+ the about page

Changing the title, contact info, and footer description was simple. I opened up
the `_config.yml` and changed the content where it says

```YAML
title: Real Title
email: realemail@mail.com
description: >- # this means to ignore newlines until "baseurl:"
  Average description
```

The about page can be changed at `about.md`. You can create new html or markdown
files at the site directory i.e. the same place where `about.md` is located. You
can also create new directories and place new files in those, and Jekyll will
build them into html pages as well.

I'm using Jekyll with GitHub Pages, which is really convenient because as soon
as I push my changes to GitHub, the static site is hosted on my personal GitHub
Pages site. The best part is that using GitHub Pages is completely free if
you're okay using a github.io url.

### References
[https://jekyllrb.com/docs/](https://jekyllrb.com/docs/)

[https://wiki.archlinux.org/index.php/Ruby](https://wiki.archlinux.org/index.php/Ruby)
