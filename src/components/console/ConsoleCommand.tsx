import React from "react";
import {ConsoleOutput} from "@site/src/components/console/ConsoleOutput";
import {ConsoleInput} from "@site/src/components/console/ConsoleInput";

export function ConsoleCommand({input, output, showOutput}: { input: string, output?: string[], showOutput?: boolean }) {
    const hasOutput = !!output;
    return <div
        style={{
            border: "2px solid #065f46",
            borderRadius: '0.5rem',
            marginBottom: '1rem',
        }}
    >
        <ConsoleInput hasOutput={hasOutput} cmd={input}/>
        {hasOutput && <ConsoleOutput output={output} defaultShowOutput={showOutput}/>}
    </div>
}