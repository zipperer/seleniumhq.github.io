---
title: "Contributing to the Selenium site & documentation"
linkTitle: "Contributing"
weight: 2
description: >-
    Information on improving documentation and code examples for Selenium
aliases: [
"/documentation/en/contributing/",
"/documentation/en/front_matter/typographical_conventions/"
]
---

Selenium is a big software project, its site and documentation are key
to understanding how things work and learning effective ways to exploit
its potential.

This project contains both Selenium's site and documentation. This is
an ongoing effort (not targeted at any specific release) to provide
updated information on how to use Selenium effectively, how to get
involved and how to contribute to Selenium.

Contributions toward the site and docs follow the process described in
the below section about contributions.

---

The Selenium project welcomes contributions from everyone. There are a
number of ways you can help:

## Report an issue

When reporting a new issues or commenting on existing issues please 
make sure discussions are related to concrete technical issues with the
Selenium software, its site and/or documentation.

All of the Selenium components change quite fast over time, so this
might cause the documentation to be out of date. If you find this to
be the case, as mentioned, don't hesitate to create an issue for that.
It also might be possible that you know how to bring up to date the
documentation, so please send us a pull request with the related
changes.

If you are not sure about what you have found is an issue or not,
please ask through the communication channels described at 
https://selenium.dev/support.


## What to Help With

### Creating Examples

Examples that need to be moved are marked with: {{% badge-code %}}

We want to be able to run all of our code examples in the CI to ensure that people can copy and paste and
execute everything on the site. So we put the code where it belongs in the
[examples directory](https://github.com/SeleniumHQ/seleniumhq.github.io/blob/trunk/examples/).
Each page in the documentation correlates to a test file in each of the languages, and should follow naming conventions.
For instance examples for this page https://www.selenium.dev/documentation/webdriver/browsers/chrome/ get added in these
files:
* `"/examples/java/src/test/java/dev/selenium/browsers/ChromeTest.java"`
* `"/examples/python/tests/browsers/test_chrome.py"`
* `"/examples/dotnet/SeleniumDocs/Browsers/ChromeTest.cs"`
* `"/examples/ruby/spec/browsers/chrome_spec.rb"`
* `"/examples/javascript/test/browser/chromeSpecificCaps.spec.js"`

Each example should get its own test. Ideally each test has an assertion that verifies the code works as intended.
Once the code is copied to its own test in the proper file, it needs to be referenced in the markdown file.

For example, the tab in Ruby would look like this:

        {{</* tab header="Ruby" */>}}
        {{</* gh-codeblock path="/examples/ruby/spec/browsers/chrome_spec.rb#L8-L9" */>}}
        {{</* /tab */>}}

The line numbers at the end represent only the line or lines of code that actually represent the item being displayed.
If a user wants more context, they can click the link to the GitHub page that will show the full context.

Make sure that if you add a test to the page that all the other line numbers in the markdown file are still
correct. Adding a test at the top of a page means updating every single reference in the documentation that has a line
number for that file.

Finally, make sure that the tests pass in the CI.


### Moving Examples

Examples that need to be moved are marked with: {{% badge-examples %}}

Everything from the [Creating Examples](#creating-examples) section applies, with one addition.

Make sure the tab includes `text=true`. By default, the tabs get formatted
for code, so to use markdown or other shortcode statements (like `gh-codeblock`) it needs to be declared as text.
For most examples, the `tabpane` declares the `text=true`, but if some of the tabs have code examples, the `tabpane`
cannot specify it, and it must be specified in the tabs that do not need automatic code formatting.


## Contribution Mechanics

The Selenium project welcomes new contributors. Individuals making
significant and valuable contributions over time are made _Committers_
and given commit-access to the project.

This guide will guide you through the contribution process.

### Step 1: Fork

Fork the project [on GitHub](https://github.com/seleniumhq/seleniumhq.github.io)
and check out your copy locally.

```shell
% git clone git@github.com:seleniumhq/seleniumhq.github.io.git
% cd seleniumhq.github.io
```

#### Dependencies: Hugo

We use [Hugo](https://gohugo.io/) and the [Docsy theme](https://www.docsy.dev/)
to build and render the site. You will need the “extended” 
Sass/SCSS version of the Hugo binary to work on this site. We recommend
to use Hugo 0.125.4 .

Please follow the [Install Hugo](https://www.docsy.dev/docs/getting-started/#install-hugo) 
instructions from Docsy.

### Step 2: Branch

Create a feature branch and start hacking:

```shell
% git checkout -b my-feature-branch
```

We practice HEAD-based development, which means all changes are applied
directly on top of `dev`.

### Step 3: Make changes

The repository contains the site and docs. To make changes to the site, 
work on the `website_and_docs` directory. To see a live preview of 
your changes, run `hugo server` on the site's root directory.

```shell
% cd website_and_docs
% hugo server
```

The project loads code from GitHub, if that code has been updated, and it isn't
reflected in your preview, you can run hugo without the cache: `hugo server --ignoreCache`

See [Style Guide]({{< ref "style.md" >}}) for more information on our conventions for contribution 

### Step 4: Commit

First make sure git knows your name and email address:

```shell
% git config --global user.name 'Santa Claus'
% git config --global user.email 'santa@example.com'
```

**Writing good commit messages is important.** A commit message
should describe what changed, why, and reference issues fixed (if
any). Follow these guidelines when writing one:

1. The first line should be around 50 characters or less and contain a
    short description of the change.
2. Keep the second line blank.
3. Wrap all other lines at 72 columns.
4. Include `Fixes #N`, where _N_ is the issue number the commit
    fixes, if any.

A good commit message can look like this:

```text
explain commit normatively in one line

Body of commit message is a few lines of text, explaining things
in more detail, possibly giving some background about the issue
being fixed, etc.

The body of the commit message can be several paragraphs, and
please do proper word-wrap and keep columns shorter than about
72 characters or so. That way `git log` will show things
nicely even when it is indented.

Fixes #141
```

The first line must be meaningful as it's what people see when they
run `git shortlog` or `git log --oneline`.

### Step 5: Rebase

Use `git rebase` (not `git merge`) to sync your work from time to time.

```shell
% git fetch origin
% git rebase origin/trunk
```

### Step 6: Test

Always remember to [run the local server](https://gohugo.io/getting-started/usage/#livereload),
with this you can be sure that your changes have not broken anything.

### Step 7: Push

```shell
% git push origin my-feature-branch
```

Go to https://github.com/yourusername/seleniumhq.github.io.git and
press the _Pull Request_ and fill out the form. **Please indicate
that you've signed the CLA** (see Step 7).

Pull requests are usually reviewed within a few days. If there are
comments to address, apply your changes in new commits (preferably
[fixups](http://git-scm.com/docs/git-commit)) and push to the same
branch.

### Step 8: Integration

When code review is complete, a committer will take your PR and
integrate it on the repository's trunk branch. Because we like to keep a
linear history on the trunk branch, we will normally squash and rebase
your branch history.

## Communication

All details on how to communicate with the project contributors
and the community overall can be found at https://selenium.dev/support
