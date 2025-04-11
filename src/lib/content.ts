import {Doc3, parseSidebar, SidebarTree,} from "@dataset.sh/doc3";
import {SidebarParser} from "@dataset.sh/doc3/dist/sidebar";

import fs from "fs";

export function parseSidebarInFile(fp: string): SidebarTree {
    const content = fs.readFileSync(fp).toString('utf-8')
    return parseSidebar(content)
}

export const blogManager = new Doc3('./blogs/en').loadByScan()
export const datasetSideBar = parseSidebarInFile('./docs/dataset-sh/sidebar')
export const datasetDocs = new Doc3('./docs/dataset-sh').loadByScan()

