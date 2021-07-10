---
id: gittower
title: Using Tower
slug: /caveats/gittower
---

We found out, that there is an issue with using Tower and the preconfigured git hooks.
This page is just a reminder that you need to configure Tower to be compliant with the boilerplate.

### Create a new environment file

Using [this guide](https://www.git-tower.com/help/guides/integration/environment/mac), will help you configuring Tower to use the git-hooks to verify some sort of default behavior for your team. 

### Using ASDF as version manager?

When you are using asdf, we are sad to tell you, that the git-hooks aren't working at all in Tower for you.