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

### For docusaurus

If you are using `docusaurus`, you can use the following snippet: 

[Want to know more about this?](https://github.com/facebook/docusaurus/discussions/9435)

```typescript jsx
import notebook from "./notebook.json"

function MyPage() {
    const [JupyterNotebookView, setJupyterNotebook] = useState(null);
    useEffect(() => {
        import("@dataset.sh/notebook-view").then(setJupyterNotebook);
    }, [])

    if (!JupyterNotebookView) {
        return <>
            loading notebook...
        </>;
    }

    return <JupyterNotebookView.JupyterNotebook
        dangerouslyDisablePurifyHTML={true}
        dangerouslyAllowHTML={true}
        notebook={notebook}
    />;

}
```

### Examples

For more examples, check out [more examples here](/related-projects/ui/notebook-view/example)