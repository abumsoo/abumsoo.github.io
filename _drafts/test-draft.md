---
layout: post
title: "Setting up Jekyll"
---

Using Jekyll has been a painless process so far.

Here's what I had to do an an Arch Linux install.

```zsh
$ pacman -S ruby
$ gem install jekyll bundler
```

I threw this into my .zshrc

```zsh
path+=("$(ruby -e 'print Gem.user_dir')/bin")
export PATH
```

After updating the path with the Gemfiles location I could actually use the
bundle and jekyll commands.

```zsh
$ bundle install
$ jekyll new myFirstBlog
$ jekyll serve
```

And then you can just go to [http://localhost:4000](http://localhost:4000) in a browser.

After I got Jekyll set up the first changes I made were the title of my website,
my contact info, footer description, and the about page.

Changing the title, contact info, and footer description was very simple. You
just open up the `_config.yml` and change the content where it says 

```YAML
title: Real Title
email: realemail@mail.com
description: >- # this means to ignore newlines until "baseurl:"
	Average description
```

The about page can be changed at `about.md` and you can basically create any new
html or markdown files at the site directory. You can also put files in other
directories and Jekyll will build them into pages as well.

Oh I should also mention that I'm using GitHub Pages with Jekyll, so as soon as
I push my changes upstream to GitHub, the static site is hosted on my personal
GitHub Pages site, which is super nice.
