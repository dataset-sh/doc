import NotebookData from './data/kitchenSink.json'
import {JupyterNotebook} from "@dataset.sh/notebook-view";

export function NotebookViewExample() {

    return <JupyterNotebook
        dangerouslyDisablePurifyHTML={true}
        dangerouslyAllowHTML={true}
        // @ts-ignore
        notebook={NotebookData!}
    />
}