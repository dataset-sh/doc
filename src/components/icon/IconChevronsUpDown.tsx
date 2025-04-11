// icon:chevrons-up-down | Lucide https://lucide.dev/ | Lucide
import * as React from "react";

function IconChevronsUpDown(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M7 15l5 5 5-5M7 9l5-5 5 5" />
        </svg>
    );
}

export default IconChevronsUpDown;
