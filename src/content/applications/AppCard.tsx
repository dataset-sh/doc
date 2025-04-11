import React from "react";
import {ApplicationCard} from "@site/src/components/showcase/ApplicationCard";

function AppCard(
    {
        tags, link, title, description
    }: {
        tags: string[],
        title: string,
        link: string,
        description: string
    }) {
    return <ApplicationCard
        bannerText={title}
        title={title}
        description={description}
        url={link}/>
}


const Apps = [
    {
        title: 'acl dataset browser',
        tags: ['research', 'nlp'],
        link: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
        title: 'review summarization',
        tags: ['commerce', 'review'],
        link: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum '
    },
]


function Main() {
    const [tab, setTab] = React.useState('vis')
    return <div className={'flex flex-col items-center justify-center h-full w-full pt-8'}>
        <div className={'w-full min-h-[960px] flex flex-col items-center justify-center'}>
            <div className="mx-4 md:mx-16 gap-8 grid grid-cols-1 md:grid-cols-2 my-8 max-w-full xl:max-w-screen-xl">
                {
                    Apps.map((app) => AppCard(app))
                }
            </div>
        </div>

        <div className={'text-gray-400 font-silkscreen flex flex-col items-center'}>
            <div>--------------------------------</div>
            <div>More applications coming soon</div>
            <div>--------------------------------</div>
        </div>
    </div>
}

export function AppContent() {
    return <div className={'flex flex-col w-screen bg-stone-900'}>
        {/*<MobileHeader/>*/}
        <div
            className={'flex flex-col w-full '}>
            <div className={'flex flex-col items-center justify-center h-full w-full'}>
                <Main/>
            </div>
        </div>
    </div>
}