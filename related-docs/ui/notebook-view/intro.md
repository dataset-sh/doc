---
title: Readme
---

# @dataset.sh/notebook-view

`@dataset.sh/notebook-view` provides react components for rendering jupyter notebook.
## Install

```shell title="yarn"
yarn add @dataset.sh/notebook-view
```

```shell title="npm"
npm install @dataset.sh/notebook-view
```

```shell title="pnpm"
pnpm install @dataset.sh/notebook-view
```
## How to render a notebook

Simply rename your `notebook.ipynb` to `notebook.json`.

```typescript jsx
import {JupyterNotebook} from "@dataset.sh/notebook-view";

import notebook from "./notebook.json"

function MyPage() {
    return <JupyterNotebook
        dangerouslyDisablePurifyHTML={true}     // disable this will affect some HTML jupyter plugin.
        dangerouslyAllowHTML={true}             // disable this will affect 'image/svg+xml' and `text/html`, 
        // and in some cases, audio and video output.

        notebook={notebook as any}
    />
}
```

### Examples:

For more examples, check out [more examples here](/related-projects/ui/notebook-view/example)