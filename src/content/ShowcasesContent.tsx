import {ShowcaseCard, ShowcaseCardProps} from "@site/src/components/showcase/ShowcaseCard";


function showCase(
    title: string,
    description: string,
    url: string,
    {urlTarget, bannerText}: {
        bannerText: string,
        urlTarget?: string
    }
): ShowcaseCardProps {
    return {title, description, url, urlTarget, bannerText}
}


export function DatasetCreationContent() {
    const creationShowcases = [
        showCase('Tutorial: hello-world',
            'In this guide, you will learn to create a simple dataset',
            '/docs/create-dataset/datafact/templates/hello-world', {
                bannerText: '✅ hello/world',
            }),
        showCase('Tutorial: media datasets',
            'in this guide, you will learn to how to bundle dataset with media files.',
            '/docs/create-dataset/datafact/templates/media', {
                bannerText: '✅ media datasets'
            }),
        showCase('Tutorial: synthetic data datasets',
            'in this guide, you will learn to how to create and bundle dataset with synthetic data.',
            '/docs/create-dataset/datafact/templates/synthetic', {
                bannerText: '✅ synthetic data datasets'
            }),
    ]
    return <div className={'grid grid-cols-1 lg:grid-cols-2'}>
        {
            creationShowcases.map((showcase, idx) => (
                <ShowcaseCard {...showcase} key={showcase.url || idx}/>
            ))
        }
    </div>
}

export const applicationShowcases = [
    showCase('Tutorial: build ML models',
        'In this tutorial, you will learn to create a simple dataset',
        '/docs/create-dataset/datafact/hello-world', {
            bannerText: '✅ How to build ML models',
        }),
    showCase('Tutorial: fashion-mnist',
        'in this tutorial, you will learn to how to bundle dataset with media files.',
        '/docs/create-dataset/datafact/media-dataset', {
            bannerText: '✅ How to visualize data'
        }),
    showCase('Tutorial: acl-datasets',
        'in this tutorial, you will learn to how to create and bundle dataset with synthetic data.',
        '/docs/create-dataset/datafact/synthetic', {
            bannerText: '✅ How to animate data'
        }),]

export function DatasetApplicationContent() {

    return <div className={'grid grid-cols-1 lg:grid-cols-2'}>
        {
            applicationShowcases.map((showcase) => (
                <ShowcaseCard {...showcase} key={showcase.url}/>
            ))
        }
    </div>
}