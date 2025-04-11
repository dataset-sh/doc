'use client'
import React, {useState} from "react";
import {ArrowRightCircleIcon, Bars3Icon} from "@heroicons/react/24/outline";
import {navigation} from "@site/src/components/common/nav/NavItems";


export function MainLayout({children}: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false)
    return <div>
        <div className={'flex flex-col w-full'}>
            <div
                className={' sticky top-0 pt-4 pb-4 pl-4 flex flex-row items-center pr-4 w-full'}>

                <a href={'/'}
                   className="flex-grow lg:flex-grow-0 mr-16 text-3xl font-bold typography inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-purple-300 to-red-800 ">dataset.sh</a>

                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name}
                           href={item.href}
                           target={item.target || ''}
                           className="text-lg font-bold leading-6 text-teal-500 hover:underline">
                            {item.name}
                        </a>
                    ))}
                </div>
                <button
                    type="button"
                    className="flex lg:hidden items-center justify-center rounded-md p-2.5 text-gray-200 bg-transparent"
                    onClick={() => setOpen(x => !x)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                </button>
            </div>

            <>
                {open && <div className={'flex lg:hidden flex-row w-full '}>
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
                </div>
                }
            </>

        </div>
        {children}
    </div>
}