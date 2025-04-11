import React from "react";
import {ClipboardDocumentIcon} from "@heroicons/react/24/outline";
import {CheckCircleIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
import {useCopyToClipboard} from "@site/src/components/blog/CodeBlock";
import {IconDollarSign} from "@site/src/components/console/IconDollarSign";
import {IconTerminal} from "@site/src/components/console/IconTerminal";

export function ConsoleInput({
                                 cmd,
                                 hasOutput
                             }: {
    cmd: string,
    hasOutput: boolean
}) {
    const {copyWithTimer, copied, copiedText} = useCopyToClipboard(2500);

    return (
        <div
            style={{
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                borderTopLeftRadius: '0.5rem',
                borderTopRightRadius: '0.5rem',
                maxWidth: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                padding: "0.5rem",
                backgroundColor: "#f8fafc", // equivalent to 'bg-slate-800'
                color: "#333", // equivalent to 'text-emerald-600'

                ...(!hasOutput && {
                    borderBottomLeftRadius: '0.5rem',
                    borderBottomRightRadius: '0.5rem',
                })
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#e5e7eb"; // equivalent to 'hover:bg-slate-700'
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#f8fafc";
            }}
        >
            <IconTerminal
                style={{
                    width: "1.25rem", // equivalent to 'w-5'
                    height: "1.25rem", // equivalent to 'h-5'
                    marginRight: "0.25rem", // equivalent to 'mr-1'
                    marginTop: "0.125rem", // adjusted for alignment
                    color: "#0f766e", // equivalent to 'text-blue-800'
                }}
            />

            <div
                style={{
                    wordBreak: "break-word", // equivalent to 'break-words'
                    maxWidth: "100%",
                    flexGrow: 1,

                }}
            >
                <div
                    style={{
                        wordBreak: "break-word", // equivalent to 'break-words'
                        maxWidth: "100%",
                    }}
                >
                    {cmd}
                </div>
            </div>
            <button
                onClick={() => {
                    copyWithTimer(cmd);
                }}
                type="button"
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    borderRadius: "0.375rem", // equivalent to 'rounded-md'
                    padding: "0.125rem 0.375rem", // equivalent to 'px-1.5 py-0.5'
                    fontSize: "0.75rem", // equivalent to 'text-xs'
                    color: "#4b5563", // equivalent to 'text-gray-600'
                    backgroundColor: "#292524", // equivalent to 'bg-stone-900'
                    cursor: "pointer",
                    outline: "none",
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#d1d5db"; // equivalent to 'hover:bg-gray-300'
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#292524";
                }}
                onFocus={(e) => {
                    e.currentTarget.style.outline = "2px solid #6366f1"; // equivalent to 'focus-visible:outline-indigo-600'
                    e.currentTarget.style.outlineOffset = "2px"; // equivalent to 'focus-visible:outline-offset-2'
                }}
                onBlur={(e) => {
                    e.currentTarget.style.outline = "none";
                }}
            >
                {copiedText && copied ? (
                    <CheckCircleIcon
                        style={{
                            height: "1rem", // equivalent to 'h-4'
                            width: "1rem", // equivalent to 'w-4'
                            color: "#22c55e", // equivalent to 'text-green-500'
                        }}
                    />
                ) : (
                    <ClipboardDocumentIcon
                        style={{
                            height: "1rem", // equivalent to 'h-4'
                            width: "1rem", // equivalent to 'w-4'
                            color: "#fbbf24", // equivalent to 'text-amber-700'
                        }}
                    />
                )}
            </button>
        </div>
    );
}