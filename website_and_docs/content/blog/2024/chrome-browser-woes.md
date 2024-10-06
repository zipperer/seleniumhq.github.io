---
title: "Two Chrome features you should disable"
linkTitle: "Two Chrome features you should disable"
date: 2024-08-18
tags: ["chrome"]
categories: ["general"]
author: Marek Andreansky [@skyhirider](https://www.linkedin.com/in/marekandreansky/)
images:
  - "/images/blog/2024/chrome-woes.jpeg"
description: This blog post lists two problematic Chrome features that can affect your automation as well as a quick way to disable them.
---

## Search engine selection screen

Starting with version 127 of Chrome, the browser [now asks which search engine you would like to use](https://www.google.com/chrome/choicescreen/), 
which is great for regular users.

But for automation, it does so every single time.

To bypass this, use the argument below when specifying the browser options.

```
--disable-search-engine-choice-screen
```

## Chrome wastes over 60MB of your bandwidth downloading language plugins

The second feature is something that has been with Chrome for quite a while now.

Every time you launch Chrome, 
[it will query and download several .crx files](https://www.reddit.com/r/chrome/comments/u78vd0/chrome_has_constantly_been_downloading_something/).

These files can even be left over on your disk's download folder if you create and close drivers faster than these can be processed.

To disable this feature, use the browser option below.

```
--disable-features=OptimizationGuideModelDownloading,OptimizationHintsFetching,OptimizationTargetPrediction,OptimizationHints
```


_This is a guest blog post by [Marek Andreansky](https://www.linkedin.com/in/marekandreansky/)_
