"use client";
import { useSelector } from "react-redux";

export default function ListWrapper({ children }: { children: React.ReactNode }) {
    const isToggle = useSelector((state: any) => state.header.mobileToggle);
    return (
        <ul className={"sm:flex items-center gap-x-3 rounded-2xl absolute sm:relative top-1.5 right-1 bg-py z-10 pt-9 p-4 sm:p-0 border sm:border-0 shadow-2xl sm:shadow-none " + (isToggle ? null : "hidden")}>
            {children}
        </ul>
    )
}
