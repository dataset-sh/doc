import React from "react";
import {IconChevronsUp} from "@site/src/components/console/IconChevronsUp";
import {IconChevronsDown} from "@site/src/components/console/IconChevronsDown";

export function ConsoleOutput({
                                  output, defaultShowOutput
                              }: {
    output: string[],
    defaultShowOutput?: boolean
}) {
    const [open, setOpen] = React.useState(defaultShowOutput || false);

    return (
        <div
            style={{
                maxHeight: open ? "none" : "32em", // equivalent to 'max-h-fit' or 'max-h-[32em]'
                width: "100%", // equivalent to 'w-full'
                backgroundColor: "#eee",
                padding: '0.5rem',
                borderBottomLeftRadius: '0.5rem',
                borderBottomRightRadius: '0.5rem',
            }}
        >
            <div style={{}
                // open ? {paddingTop: "0.5rem", paddingBottom: "0.5rem"} : {}
            }>
                <div
                    style={{
                        color: "#b91c1c", // equivalent to 'text-red-700'
                        fontWeight: "bold",
                        fontSize: "0.75rem", // equivalent to 'text-xs'
                        display: "flex",
                        alignItems: 'center',
                        cursor: "pointer",
                    }}
                    onClick={() => setOpen((x) => !x)}
                >
                    {open
                        ?
                        <>
                            <IconChevronsUp style={{fontSize: "1rem"}}/>
                            Hide Output
                        </>
                        :
                        <>
                            <IconChevronsDown style={{fontSize: "1rem"}}/>
                            Click to show output
                        </>
                    }

                </div>
                {
                    open && <div style={{marginBottom: "0.5rem"}}>
                        <pre
                            style={{
                                backgroundColor: "transparent",
                                padding: "0.5rem",
                                whiteSpace: "pre-wrap",
                            }}
                        >
                            {output.join('\n')}
                        </pre>
                    </div>
                }
            </div>
        </div>
    );
}