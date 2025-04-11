import NotebookData from './data/convert-csv-dataset.json'
import {JupyterNotebook} from "@dataset.sh/notebook-view";

export function CreateDatasetViaApi() {
    // @ts-ignore
    return <JupyterNotebook notebook={NotebookData!}/>
}