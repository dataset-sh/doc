import React from "react";
import {CommandLineDesignMobile} from "@site/src/components/landing/CommandLineDesign";


function Separator() {
    return <div className={'block w-[42px] min-h-[4px] bg-gradient-to-r from-red-500 to-blue-500 my-8'}></div>
}

export function OneColumn() {
    return <div className={'flex flex-col w-screen bg-stone-900'}>
        {/*<MobileHeader/>*/}
        <div
            className={'flex flex-col w-full '}>
            <CommandLineDesignMobile/>
        </div>
    </div>
}