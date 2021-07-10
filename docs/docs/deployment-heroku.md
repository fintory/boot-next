---
id: deployment-on-heroku
title: Deployment on Heroku
sidebar_label: Heroku
slug: /deployment/heroku
---

Next.js is a very nice tool, when it comes to easy deployment, since you do not need to setup everything from scratch. You could simply run `yarn build` & `yarn start` (more about scripts in the "scripts" document), and the application is running on the machine. However, Heroku on the other side, has no "real" build step, so we need to utilize the NPM scripts a little and add some more scripts for building the application on Heroku. Because what we don't want is to build the application on our own machine and then commit everything to version control.

### Step 1: Customize the package.json

We need to add a custom [NPM script](./features-scripts.md) to our `package.json` to enable the build step for Heroku. For this, add the following line of code into the "scripts" section of your `package.json`:

```json
{
  // [...]
  "scripts": {
    // [...]
    "heroku-postbuild": "yarn build"
    // [...]
  }
  // [...]
}
``` 

### Step 2: Add a `Procfile` to the root of your project

By now, you should be able to be up and running on your next deployment/push to the Heroku servers, since the `start` NPM script is the default process for the `web` instance for them. However, to be 100% sure for later usage or when adding some sort of custom environment variables to the server, you need to add this simple line in a new file called `Procfile`.

```shell script
web: yarn start
```

:::tip What is a `Procfile`?
`Procfile` is an abbreviation for the word "process file". Here we are specifying our processes Heroku should run.
:::

### Step 3: Push to Heroku

Add all files to git, commit and push to the Git servers you are using. PROFIT!