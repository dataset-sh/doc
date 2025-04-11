export function DatasetCard({name, description}: { name: string, description: string }) {
    return <div
        className={'px-4 py-4 rounded-md text-gray-400'}>


        <div className={'inline'}>
            👉 <a
            className={'text-lg text-teal-500'}
            href={`https://public.dataset.sh/dataset/${name}`}>{name}
        </a>
        </div>
        {
            description && <>
                <span className={'font-bold'}> - </span>
                <span className={'text-gray-400'}>
                    {description}
                </span>
            </>
        }

    </div>
}

const datasets = [
    {name: 'unofficial-wiki/people', description: ''},
    {name: 'unofficial-wiki/written-works', description: ''},
    {name: 'nlp/word_freq', description: ''},
    {name: 'nlp/word_freq', description: ''},
    {name: 'nlp/word_freq', description: ''},
    {name: 'nlp/word_freq', description: ''},
    {
        name: 'nlp/word_freq',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }
]

export function DatasetContent() {
    return <div className={'flex flex-col items-center justify-center h-full w-full pt-8'}>
        <div className={'w-full min-h-[960px] flex flex-col items-center justify-center'}>
            <div className="mx-4 md:mx-16 flex flex-col my-8 max-w-full xl:max-w-screen-xl">
                {
                    datasets.map((d) => DatasetCard(d))
                }
            </div>
        </div>

        <div className={'text-orange-300 font-silkscreen flex flex-col items-center'}>
            <div>--------------------------------</div>
            <div>More datasets coming soon</div>
            <div>--------------------------------</div>
        </div>
    </div>
}