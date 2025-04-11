import React, {useEffect, useRef, useState} from "react";
import {CheckCircleIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
import {ArrowRightCircleIcon, ClipboardDocumentIcon} from "@heroicons/react/24/outline";
import {classNames} from "@site/src/lib/utils/common";
import {useCopyToClipboard} from "@site/src/components/blog/CodeBlock";
import IconCheckCircle from "@site/src/components/icon/IconCheckCircle";
import {navigation} from "@site/src/components/common/nav/NavItems";

function repeatArray<T>(arr: T[], n: number): T[] {
    if (n <= 0) return [];
    return Array(n).fill(arr).flat();
}

function Adj() {
    const adjs = repeatArray(
        [
            'Vision',
            'Audio',
            'Political Science',
            'Speech',
            'Finance',
            'NLP',
            'Education',
            'Medical',
            'Legal',
            'Social Media',
            'E-commerce',
            'Healthcare',
            'Geospatial',
            'Climate',
            'Weather',
            'Sensor',
            'Text',
            'Image',
            'Video',
            'Multimodal',
            'Biological',
            'Genomic',
            'Astronomical',
            'Psychological',
            'Retail',
            'Transportation',
            'Agricultural',
            'Demographic',
            'Cybersecurity',
            'Gaming',
            'Economic',
            'Sports',
            'News',
            'Satellite',
            'Historical',
            'Survey',
            'Synthetic',
            'Real-world',
            'Annotated',
            'Temporal',
            'Linguistic',
            'Conversational',
            'Crowdsourced',
        ], 3
    )
    const bgClassNames = [
        'text-pink-500',
        'text-green-300',
        'text-pink-300',
        'text-gray-200',
        'text-red-200',
        'text-teal-200',
        'text-lime-200',
    ]
    const [scrollWidth, setScrollWidth] = useState(0);
    const containerRef = useRef(null) as any;

    useEffect(() => {
        if (containerRef.current) {
            const computeScrollWidth = containerRef.current.scrollWidth / 2;
            setScrollWidth(computeScrollWidth);
        }
    }, [containerRef.current]);

    useEffect(() => {
        let animationFrameId: any = null;

        const animate = () => {
            if (containerRef.current) {
                containerRef.current.scrollLeft += 1;
                if (containerRef.current.scrollLeft >= scrollWidth) {
                    containerRef.current.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [scrollWidth]);

    return (
        <div ref={containerRef}
             className="max-w-full overflow-hidden italic text-2xl font-bold flex flex-row gap-x-4 bg-emerald-900 py-4">
            {adjs.concat(adjs).map((v, idx) => (
                <div key={idx}
                     className={
                         classNames("flex-none capitalize", bgClassNames[idx % bgClassNames.length])
                     }

                >{v}</div>
            ))}
        </div>
    );
}

function Verb() {
    const verbs = [
        // 'Manage', 'Upload', 'Share', 'Download', 'Find',
        // 'Manage', 'Upload', 'Share', 'Download', 'Find',
        // 'Manage', 'Upload', 'Share', 'Download', 'Find',
        // 'Manage', 'Upload', 'Share', 'Download', 'Find',
        // 'Manage', 'Upload', 'Share', 'Download', 'Find',
        'dataset', 'dataset', 'dataset', 'dataset', 'dataset', 'dataset', 'dataset',
        'dataset', 'dataset', 'dataset', 'dataset', 'dataset', 'dataset', 'dataset',
        'dataset', 'dataset', 'dataset', 'dataset', 'dataset', 'dataset', 'dataset',
    ];
    const containerRef = useRef(null) as any;
    const [scrollWidth, setScrollWidth] = useState(0);
    // const bgClassNames = [
    //     'text-pink-500',
    //     'text-green-700',
    //     'text-pink-600',
    //     'text-green-700',
    //     'text-red-800',
    // ]
    const bgClassNames = [
        'text-pink-500',
        'text-green-300',
        'text-pink-300',
        'text-gray-200',
        'text-red-200',
        'text-teal-200',
        'text-lime-200',
    ]

    useEffect(() => {
        if (containerRef.current) {
            const computeScrollWidth = containerRef.current.scrollWidth / 2;
            setScrollWidth(computeScrollWidth);
        }
    }, [containerRef.current]);

    useEffect(() => {
        let animationFrameId: any = null;

        const animate = () => {
            if (containerRef.current) {
                containerRef.current.scrollLeft += 1;
                if (containerRef.current.scrollLeft >= scrollWidth) {
                    containerRef.current.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [scrollWidth]);

    return (
        <div ref={containerRef}
             className="max-w-full overflow-hidden italic text-2xl font-bold flex flex-row gap-x-4 bg-green-800 py-4 ">
            {verbs.concat(verbs).map((v, idx) => (
                <div
                    key={idx}
                    className={
                        // classNames("flex-none text-yellow-500 hover:text-red-600 capitalize")
                        classNames("flex-none capitalize", bgClassNames[idx % bgClassNames.length])

                    }
                >{v.toUpperCase()}</div>
            ))}
        </div>
    );
}

export function CLIInput(
    {
        code
    }: {
        code: string
    }) {
    const {copyWithTimer, copied, copiedText} = useCopyToClipboard(2500)

    return <div
        className={'max-w-full flex flex-row items-start py-2 px-2 bg-slate-800 text-emerald-600 hover:bg-slate-700 '}>
        <ChevronRightIcon className={'w-5 h-5 mr-1 mt-0.5 text-blue-800'}/> {/* Adjusted mt-1 for alignment */}
        <div className={'break-words max-w-full flex-grow'}>
            <div className={'break-words max-w-full'}>{code}</div>
        </div>
        <button
            onClick={() => {
                copyWithTimer(code)
            }}
            type="button"
            className="inline-flex items-center  rounded-md
                     px-1.5 py-0.5 text-xs text-gray-600
                     bg-stone-900
                     cursor-pointer
                     hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            {(copiedText && copied) ? <CheckCircleIcon className={'h-4 w-4 text-green-500'}/> :
                <ClipboardDocumentIcon className={'h-4 w-4 text-amber-700'}/>}
        </button>

    </div>
}

function PythonPrompt({children}: { children: React.ReactNode }) {
    return <span
        className={'flex flex-row items-start py-2 px-2 bg-slate-800 text-emerald-600 whitespace-pre-wrap break-all'}
    >{children}</span>
}

function PythonPromptOutput({children}: { children: React.ReactNode }) {
    return <span>{children}</span>
}

export function CLIComment(
    {
        children
    }: {
        children: React.ReactNode
    }) {
    return <div className={'flex flex-row items-start px-2 bg-slate-800 text-gray-300'}>
        <div className={'ml-6 '}>{children}</div>
    </div>
}


export function CommandLineDesign() {
    return <div className={'mx-auto flex flex-col items-center justify-center h-full w-full'}>
        <Verb/>
        <div className={'flex flex-col md:flex-row items-center gap-x-6 text-gray-700 font-kode h-full px-2'}>
            <div className={'flex flex-col pb-2 bg-slate-800 rounded-md '}>
                <div className={'bg-stone-700 h-6 rounded-t-md px-2'}>
                    <div className={'w-2 h-2 rounded-full inline-block bg-red-700 mr-2'}></div>
                    <div className={'w-2 h-2 rounded-full inline-block bg-yellow-600 mr-2'}></div>
                    <div className={'w-2 h-2 rounded-full inline-block bg-green-800 mr-2'}></div>
                </div>

                <div className={'h-4'}></div>
                <CLIComment children={'Project dataset.sh'}/>

                <div className={'h-1'}></div>

                <CLIComment children={'what do we do?'}/>
                <div className={'pl-4'}>
                    <CLIComment children={'1. we store datasets.'}/>
                    <CLIComment children={'2. we make it easier to find and easier to use datasets in your project.'}/>
                </div>

                <CLIInput code={'pip install dataset.sh -U'}/>
                <CLIInput code={'dataset.sh remote download official/hello-world'}/>
                <CLIInput
                    code={`python -c "import dataset_sh; print(dataset_sh.dataset('official/hello-world').latest().open().collection('data').to_list()[0])"`}/>
            </div>
        </div>
        <Adj/>
    </div>
}


function Title() {
    return <div className={'flex lg:hidden'}>
        <h1 className="ml-8 text-3xl font-bold typography inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-purple-300 to-red-800 ">dataset.sh</h1>
    </div>
}

function Dataset() {
    return <div
        className={"py-5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-4xl font-rocksalt text-transparent bg-clip-text mb-16"}
    >
        data!
    </div>
}

function Terminal({children}: { children: React.ReactNode }) {
    return <div
        className={'flex flex-col items-center my-8 text-gray-700 font-kode h-full md:px-20 mx-6 md:mx-16 max-w-full border border-gray-600 rounded-md xl:max-w-screen-xl w-full'}>
        <div className={'flex flex-col pb-2 bg-slate-800 rounded-md max-w-full w-full'}>
            <div className={'bg-stone-700 h-6 rounded-t-md px-2'}>
                <div className={'w-2 h-2 rounded-full inline-block bg-red-700 mr-2'}></div>
                <div className={'w-2 h-2 rounded-full inline-block bg-yellow-600 mr-2'}></div>
                <div className={'w-2 h-2 rounded-full inline-block bg-green-800 mr-2'}></div>
            </div>
            <div className={'h-2'}></div>
            {children}
        </div>
    </div>
}

function Installation() {
    return <Terminal>
        <CLIComment children={"Install dataset.sh python client"}/>
        <CLIInput code={'pip install dataset.sh -U'}/>
        <CLIComment children={"Download hello-world dataset"}/>
        <CLIInput code={'dataset.sh remote download hello/world'}/>
        <CLIComment children={"Open dataset browser"}/>
        <CLIInput code={'dataset.sh gui hello/world'}/>
    </Terminal>
}

function Download() {
    return <Terminal>
        <CLIInput code={'dataset.sh remote download official/hello-world'}/>
    </Terminal>
}

function SectionHeader({title}: { title: string }) {
    return <div className={'ml-8 text-yellow-300 text-2xl italic underline font-silkscreen'}>
        # {title}
    </div>
}

function SubSectionHeader({title}: { title: string }) {
    return <div className={'ml-8 text-yellow-300 text-2xl italic underline'}>
        ## {title}
    </div>
}

function Usage() {
    return <Terminal>
        <CLIComment
            children={"dataset.sh can generate all related data structure automatically, so you don't have to worry about writing a parser or creating type definitions."}/>
        <CLIInput code={'dataset.sh local show-usage official/hello-world'}/>
    </Terminal>
}

function HostYourOwn() {
    return <Terminal>
        <CLIComment>
            You can use our public server at https://repo.dataset.sh, or you can also host your own for yourself or your
            organization.
        </CLIComment>
        <CLIInput code={'dataset-sh-server start'}/>
        <CLIComment children={'# or use the docker version'}/>
        <CLIInput code={'dataset-sh-server start'}/>
    </Terminal>
}

function Intro() {
    return <div
        className={'flex flex-col my-8 text-gray-200 font-kode h-full mx-4 md:mx-16 max-w-full xl:max-w-screen-xl'}>
        dataset.sh is a dataset manager (just like pip/pypi, npm, maven, and etc but for datasets) with its own packing
        standard to ensure every dataset we host are easy to search and ready to use in any programing languages.
    </div>
}

function Tutorials() {
    return <div
        className={'flex flex-col my-8 text-gray-200 font-kode h-full mx-2 md:mx-16 max-w-full xl:max-w-screen-xl'}>
        <p>(python) How to create datasets</p>
        <p>(python) How to host your own server</p>
    </div>
}


function DatasetAndProjects() {
    return <div
        className={'flex flex-col my-8 text-gray-200 font-kode h-full mx-2 md:mx-16 max-w-full xl:max-w-screen-xl'}>
        <p>(python) How to create datasets</p>
        <p>(python) How to build a data visualization</p>
        <p>(python) How to build a classifier</p>
    </div>
}


function Clients() {
    return <div
        className={'rounded-md flex flex-col my-8 text-gray-100 font-kode h-full mx-2 md:mx-16 max-w-full xl:max-w-screen-xl'}>
        <table className="rounded-md border-collapse border-2 border-yellow-700 w-full">
            <thead className={'rounded-t-md'}>
            <tr>
                <th className="border-2 border-yellow-700 p-2">Language</th>
                <th className="border-2 border-yellow-700 p-2">Create Dataset?</th>
                <th className="border-2 border-yellow-700 p-2">Read Dataset?</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border-2 border-yellow-700 p-2">python</td>
                <td className="border-2 border-yellow-700 p-2"><IconCheckCircle
                    className={'inline text-green-400'}/> dataset.sh
                </td>
                <td className="border-2 border-yellow-700 p-2"><IconCheckCircle
                    className={'inline text-green-400'}/> dataset.sh
                </td>
            </tr>

            <tr>
                <td className="border-2 border-yellow-700 p-2">javascript/typescript</td>
                <td className="border-2 border-yellow-700 p-2"><IconCheckCircle
                    className={'inline text-green-400'}/> @dataset.sh/read
                </td>
                <td className="border-2 border-yellow-700 p-2">Not yet</td>
            </tr>

            <tr>
                <td className="border-2 border-yellow-700 p-2">java/kotlin/scala</td>
                <td className="border-2 border-yellow-700 p-2">Not yet</td>
                <td className="border-2 border-yellow-700 p-2">Not yet</td>
            </tr>

            <tr>
                <td className="border-2 border-yellow-700 p-2">julia</td>
                <td className="border-2 border-yellow-700 p-2">Not yet</td>
                <td className="border-2 border-yellow-700 p-2">Not yet</td>
            </tr>


            </tbody>
        </table>
    </div>
}

function ArticleCard({text, url}: { text: string, url: string }) {
    return <div
        className={'p-8 shadow shadow-amber-200 rounded-md border-solid border border-yellow-900 text-xl font-bold font-kode'}>
        <a className={'text-emerald-500'} href={url}>{text}</a>
    </div>
}

function Articles() {
    return <div className="mx-4 md:mx-16 gap-8 grid grid-cols-1 md:grid-cols-1 my-8 max-w-full xl:max-w-screen-xl">
        {/*<ArticleCard text={'🏗 Contribute to Open Data'} url={'/blog/open-data'}/>*/}
        <ArticleCard text={'📖 Read the doc'} url={'/docs/intro'}/>
        <ArticleCard text={'🧐 Guide for Dataset creator'}
                     url={'/blog/guide-for-dataset-creator'}/>

        <ArticleCard text={'🚀 awesome datasets'} url={'https://app.dataset.sh/dataset'}/>

        {/*<ArticleCard text={'📖 Blog Posts'} url={'/blog/pinned-posts'}/>*/}
    </div>
}

function BulletPoint({children}: { children: React.ReactNode }) {
    return <li className={'text-emerald-500 pl-2'}>
        {children}
    </li>
}

function BulletPointTitle({children}: { children: React.ReactNode }) {
    return <div className={'text-emerald-500'}>
        {children}
    </div>

}

function BulletPointList({children, title}: { children: React.ReactNode, title: React.ReactNode }) {
    return <div
        className={'pt-6 px-8 shadow shadow-amber-200 rounded-md border-solid border border-yellow-900 text-xl font-bold font-kode'}>
        <BulletPointTitle>
            {title}
        </BulletPointTitle>

        <ul className={'mx-6'}>
            {children}
        </ul>
    </div>
}

function BulletPointSection() {
    return <div className={'flex flex-col gap-y-4 py-8'}>


        <BulletPointList title={'What do you need to know'}>
            <BulletPoint>
                create synthetic datasets using generative model
            </BulletPoint>

            <BulletPoint>
                create synthetic datasets using generative model
            </BulletPoint>
        </BulletPointList>

        <BulletPointList title={'🧐 What datasets can I build?'}>
            <BulletPoint>
                create synthetic datasets using generative model
            </BulletPoint>

            <BulletPoint>
                create synthetic datasets using generative model
            </BulletPoint>
        </BulletPointList>

        <BulletPointList title={'🧐 What datasets can I build?'}>
            <BulletPoint>
                create synthetic datasets using generative model
            </BulletPoint>

            <BulletPoint>
                create synthetic datasets using generative model
            </BulletPoint>
        </BulletPointList>

        <BulletPointList title={'🧐 What datasets can I build?'}>
            <BulletPoint>
                create synthetic datasets using generative model
            </BulletPoint>

            <BulletPoint>
                create synthetic datasets using generative model
            </BulletPoint>
        </BulletPointList>


    </div>
}

function MainContentBlock() {
    return <div className={'w-full min-h-[960px] flex flex-col items-center justify-center pb-8'}>

        <div className={'ml-8 text-yellow-100 text-5xl font-silkscreen'}>
            dataset.sh
        </div>

        <Intro/>

        <SectionHeader title={'Installation'}/>
        <Installation/>

        <SectionHeader title={'What to do next?'}/>
        <Articles/>


        {/*<SectionHeader title={'Tutorials'}/>*/}
        {/*<Tutorials/>*/}

        {/*<SectionHeader title={'Showcases'}/>*/}

        {/*<Download/>*/}

        {/*<SectionHeader title={'Use Datasets'}/>*/}
        {/*<Usage/>*/}

        {/*<SectionHeader title={'Host your own server'}/>*/}
        {/*<HostYourOwn/>*/}
    </div>
}

function Menu() {
    return <div className={'flex lg:hidden flex-row w-full '}>
        <div className={'pt-2 px-4 pb-2 flex-1'}>
            {
                navigation.map(item => {
                    return <div
                        key={item.href}
                        className={'ml-6 mt-4 border-r pr-4 border-gray-800 border-dashed'}>
                        <a href={item.href}
                           className={'w-full text-slate-300 inline-flex flex-row items-center pb-1 border-b border-gray-500 hover:text-teal-600'}>
                            <ArrowRightCircleIcon className={'h-5 w-5 mr-2'}/>
                            <span className={'ml-2 hover:ml-0 hover:pr-2'}>{item.name}</span>
                        </a>
                    </div>
                })
            }
        </div>
        {/*<div*/}
        {/*    className={'flex-1 flex flex-row justify-center items-center mt-6 pt-12 min-h-full  bg-gradient-to-tr from-slate-800 to-slate-600 mr-8 rounded-md border-4 border-gray-800 '}>*/}
        {/*    <Dataset/>*/}
        {/*</div>*/}
    </div>
}

function Main() {
    return <div
        className={'from-stone-800 to-stone-600  flex flex-col items-start w-full pt-10'}>
        {/*<Title/>*/}
        {/*<Menu/>*/}
        <MainContentBlock/>
    </div>
}

export function CommandLineDesignMobile() {
    return <div className={'flex flex-col items-center justify-center h-full w-full'}>
        <Verb/>
        <Main/>
        <Adj/>
    </div>
}