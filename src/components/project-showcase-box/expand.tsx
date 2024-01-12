"use client";
import { useState } from "react";
import ShowLoading from "../show-loading";

export default function Expand({ children }: { children?: React.ReactNode }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className='relative rounded-lg'>
            <div role='button' className='w-[95%] mx-auto bg-sy p-2 opacity-40 hover:opacity-80 text-xs rounded-lg select-none' onClick={() => setExpanded(x => !x)}>
                {expanded ? "Hide" : "See More"}
            </div>
            {expanded && (
                <div className="text-sm p-2 absolute bg-py backdrop-blur-3xl -translate-y-10 bottom-0 min-h-40 ring-1 ring-sy text-cl/60 w-full z-10">
                    <ShowLoading fallback={<>{children}</>} show={expanded} duration={400} height="100px" />
                </div>
            )}
        </div>
    );
}
