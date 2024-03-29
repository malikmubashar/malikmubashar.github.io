"use client";
import { useSelector } from "react-redux";

export default function ListWrapper({ children }: { children: React.ReactNode }) {
    const isToggle = useSelector((state: any) => state.header.mobileToggle);
    return (
        <ul className={"sm:flex items-center gap-x-6 rounded-2xl absolute sm:relative top-1.5 sm:top-0 right-1 sm:right-0 z-10 pt-9 p-4 bg-py sm:bg-transparent sm:p-0 sm:pl-6 border sm:border-0 shadow-2xl sm:shadow-none " + (isToggle ? null : "hidden")}>
            {children}
        </ul>
    )
}
