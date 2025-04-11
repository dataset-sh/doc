# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

```text

TODO:
how to release a dataset.

how to write readme for dataset.

how to design typing of dataset.

how often should I release my dataset.

where to share datasets.

how to evaluate datasets.

how to visualize datasets.

how to create datasets with language models.

how to create datasets with human.

how to create datasets with human.

# mini courses: How to build with data.

introduction

analyze your problem and figure out what to collect/create.

how to create dataset using LLM.

how to create dataset using human.
    
how to evaluate your datasets.
    from human.
    from llm.

how to visualize datasets.
    python
    web
    video

how to learn from datasets.
    vision...
    language...
    audio...

```