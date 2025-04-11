import NotebookData from './data/convert-csv-dataset.json'
import {useEffect, useState} from "react";

export function CreateDatasetViaApi() {

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
        notebook={NotebookData as any}/>
    //
    // return <BrowserOnly>
    //     {
    //         () => {
    //             // const JupyterNotebook = require('@dataset.sh/notebook-view');
    //             return <JupyterNotebook
    //                 dangerouslyDisablePurifyHTML={true}
    //                 dangerouslyAllowHTML={true}
    //                 notebook={NotebookData as any}/>
    //         }
    //     }
    // </BrowserOnly>
}