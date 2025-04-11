import {unified} from 'unified'
import parse from 'remark-parse';
 
export type TOC = {
    id: string,
    title: string
    level: number
}

export function generateToc(blogContent: string): TOC[] {
    const processor = unified().use(parse);

    const tree = processor.parse(blogContent);
    let tocNodes: TOC[] = [];

    tree.children.forEach((node) => {
        if (node.type === 'heading' && node.depth <= 6) {
            tocNodes.push({
                ...getTextFromNode(node),
                level: node.depth,
            });
        }
    });
    return tocNodes;
}

function generateId(title: string) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function getTextFromNode(node: any): { title: string, id: string } {
    const textNodes: string[] = [];

    // Extract text from all text nodes within the given node
    node.children.forEach((child: any) => {
        if (child.type === 'text') {
            textNodes.push(child.value);
        }
    });

    const title = textNodes.join('')
    const id = generateId(title);


    return {title, id};
}
