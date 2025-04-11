import React from "react";

function Terminal({children}: { children: React.ReactNode }) {
    return <div
        className={'flex flex-col rounded-t-md items-center font-kode w-full max-w-full border' +
            ' border-gray-600'}>
        <div className={'flex flex-col pb-2 bg-slate-800 rounded-t-md max-w-full w-full'}>
            <div className={'bg-stone-500 h-6 rounded-t-md px-2'}>
                <div className={'w-2 h-2 rounded-full inline-block bg-red-700 mr-2'}></div>
                <div className={'w-2 h-2 rounded-full inline-block bg-yellow-600 mr-2'}></div>
                <div className={'w-2 h-2 rounded-full inline-block bg-green-800 mr-2'}></div>
            </div>

            <div className={'h-2'}></div>
            <div className={'py-10 text-orange-400 text-center w-full font-bold text-xl'}>
                {children}
            </div>
        </div>
    </div>
}

export type AppCardProps = {
    bannerText: string;
    title: string;
    description: string;
    url: string;
    urlTarget?: string
}

export function ApplicationCard({
                                    bannerText,
                                    title,
                                    description,
                                    url,
                                    urlTarget
                                }: AppCardProps) {
    return (
        <div
            className="max-w-sm m-4 rounded-lg bg-stone-500  border-4 border-orange-500 shadow shadow-gray-900">
            <a href={url} target={urlTarget}
               className={'bg-red-400 hover:no-underline'}>
                <Terminal>
                    {bannerText}
                </Terminal>
            </a>
            <div className="p-4">
                <h2 className="text-lg font-bold text-white mb-2">{title}</h2>
                <p className="text-gray-600 dark:text-gray-100 text-sm mb-4 line-clamp-3">{description}</p>
                <a
                    href={url}
                    target={urlTarget}
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-900 rounded-md transition duration-200"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
}

