'use client'
import React from "react";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dracula as codeStyle} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
    CheckCircleIcon,
    ArrowsPointingInIcon,
    ChevronUpDownIcon
} from '@heroicons/react/20/solid'
import {
    ClipboardDocumentIcon,
} from '@heroicons/react/24/outline'

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean> // Return success

export function useCopyToClipboard(timerMs: number) {
    const [copiedText, setCopiedText] = React.useState<CopiedValue>(null)
    const [copied, setCopiedGuard] = React.useState(false);

    const copy: CopyFn = async text => {
        if (!navigator?.clipboard) {
            console.warn('Clipboard not supported')
            return false
        }

        try {
            await navigator.clipboard.writeText(text)
            setCopiedText(text)
            return true
        } catch (error) {
            console.warn('Copy failed', error)
            setCopiedText(null)
            return false
        }
    }

    const copyWithTimer = (value: string) => {
        setCopiedGuard(true)
        copy(value)
        setTimeout(() => {
            setCopiedGuard(false)
        }, timerMs)

    }

    return {
        copy, copyWithTimer, copied, copiedText
    }
}

export function CodeBlock({code, title, language}: {
    code: string,
    title?: string,
    language: string
}) {
    const {copyWithTimer, copied, copiedText} = useCopyToClipboard(2500)

    const [enableFixLength, setEnableFixLength] = React.useState(true);
    const [enableLineWrap, setEnableLineWrap] = React.useState(true);

    const canMinimize = code && code.split('\n').length > 30;
    // const canMinimize = true;

    return <div className={'bg-transparent rounded-md border-2 border-gray-600'}>
        <div className={'pr-2 flex flex-row-reverse rounded-t-md items-center font-bold font-kode'}>
            <div>
                <button
                    onClick={() => {
                        copyWithTimer(code)
                    }}
                    type="button"
                    className="inline-flex items-center gap-x-1.5 rounded-md
                     px-2.5 py-0.5 text-xs text-gray-600

                     hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {(copiedText && copied) ? 'Copied' : 'Copy'}
                    {(copiedText && copied) ? <CheckCircleIcon className={'h-4 w-4 text-green-500'}/> :
                        <ClipboardDocumentIcon className={'h-4 w-4 text-amber-700'}/>}
                </button>
            </div>
            <div
                className={'inline-flex w-16 items-center rounded-full px-2 text-xs font-medium text-yellow-800  ml-2'}>
                {language}
            </div>

            <div className={'ml-2'}>{title}</div>

            <div className='flex-grow'></div>
            {
                (canMinimize) && <div>
                    <button
                        onClick={() => {
                            setEnableFixLength(!enableFixLength)
                        }}
                        type="button"
                        className="inline-flex items-center gap-x-1.5 rounded-md
                     mx-1 px-1.5 py-1.5 text-xs font-semibold

                     bg-transparent
                     hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {enableFixLength ? <ArrowsPointingInIcon className={'h-5 w-5 text-blue-900'}/> :
                            <ChevronUpDownIcon className={'h-5 w-5 text-blue-900'}/>}
                    </button>
                </div>
            }

        </div>
        <div className={(canMinimize && enableFixLength) ? 'overflow-y-scroll h-[32rem] text-sm' : 'text-sm'}>
            {/*@ts-ignore*/}
            <SyntaxHighlighter
                wrapLongLines={true}
                language={language}
                style={codeStyle}>
                {code}
            </SyntaxHighlighter>
        </div>

    </div>
}

