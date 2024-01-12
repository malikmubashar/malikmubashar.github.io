"use client";
import { useState } from "react";

export function Loader({ height }: { height?: string }) {
    return (
        <div className='w-full h-96 grid place-content-center' style={{ height: height }}>
            <div className=' w-5 h-5 border-t-4 border-bd rounded-full animate-spin'></div>
        </div>
    );
}

export default function ShowLoading({ fallback, show,height, duration = 800 }: { fallback: JSX.Element, show: boolean, duration?: number, height?: string }) {
    const [loaded, setLoaded] = useState(<Loader height={height}/>);
    if (show) {
        setTimeout(() => {
            setLoaded(fallback);
        }, duration);
        return loaded;
    }
}
