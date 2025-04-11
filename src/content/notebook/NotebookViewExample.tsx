import NotebookData from './data/kitchenSink.json'
import {useEffect, useState} from "react";

export function NotebookViewExample() {
    //
    // return <JupyterNotebook
    //     dangerouslyDisablePurifyHTML={true}
    //     dangerouslyAllowHTML={true}
    //     // @ts-ignore
    //     notebook={NotebookData!}
    // />
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
        notebook={NotebookData}
    />;
    // return <BrowserOnly fallback={<div>Loading...</div>}>
    //     {() => {
    //         // @ts-ignore
    //         const JupyterNotebook = JupyterNotebook?.JupyterNotebook;
    //         if (!JupyterNotebook) {
    //             return <>
    //             </>;
    //         }
    //
    //     }}
    // </BrowserOnly>

    //
    // return <JupyterNotebook
    //     dangerouslyDisablePurifyHTML={true}
    //     dangerouslyAllowHTML={true}
    //     notebook={{
    //         "cells": [
    //             {
    //                 "cell_type": "markdown",
    //                 "id": "b668868f-46ec-40e3-ad28-79fbf85f3263",
    //                 "metadata": {},
    //                 "source": [
    //                     "# Notebook Example\n",
    //                     "\n",
    //                     "This is a **markdown** block:\n",
    //                     "\n",
    //                     "Let $R = \\{ x \\mid x \\not\\in x \\}$, then $R \\in R \\iff R \\notin R$\n",
    //                     "\n"
    //                 ]
    //             }
    //         ],
    //         "metadata": {
    //             "kernelspec": {
    //                 "display_name": "base",
    //                 "language": "python",
    //                 "name": "base"
    //             },
    //             "language_info": {
    //                 "codemirror_mode": {
    //                     "name": "ipython",
    //                     "version": 3
    //                 },
    //                 "file_extension": ".py",
    //                 "mimetype": "text/x-python",
    //                 "name": "python",
    //                 "nbconvert_exporter": "python",
    //                 "pygments_lexer": "ipython3",
    //                 "version": "3.12.8"
    //             }
    //         },
    //         "nbformat": 4,
    //         "nbformat_minor": 5
    //     } as any}
    // />
}