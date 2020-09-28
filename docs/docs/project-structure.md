---
id: project-structure
title: Project Structure
sidebar_label: Project Structure
slug: /
---

The project structure is a little different than the one you are having with a normal React.js project (i.e. with `create-react-app`). However we are pretty similar with the `create-next-app` setup, except some minor changes in the folder structure. See below, for what each folder is here, and why it is necessary.

The checkmark (✅), or cross (❌) is used for identifying, whether it is safe to remove the folder after cloning, or not.

| Folder | What's included? |  | 
| --- | --- | --- |
| `components` | Global components, should be familiar when working with React.js | ❌ | 
| `docs` | You can remove this folder safely. Those are just the docs you are currently reading. | ✅ | 
| `pages` | The `pages` folder represents both, the screens and the routing of the Next.js application your are going to write. | ❌ | 
| `public` | The public folder is for holding assets, sitemaps, etc. | ❌ | 
| `sections` | Sections are here for you to be a little more structure while developing landing pages. You can remove this one safely. | ✅ | 
| `store` | Since we are using `mobx-state-tree` in the boilerplate, we encourage you to store your stores here. | ❌ | 
| `utils` | This is a little folder just for the sake of being available. If you have some utility functions, please place them here. | ❌ | 
