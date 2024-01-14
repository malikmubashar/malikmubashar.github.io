"use client";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileMenu } from "@/lib/reducers";

export default function MenuButton() {
    const dispatch = useDispatch();
    const isToggle = useSelector((state: any) => state.header.mobileToggle);
    const child = "bg-cl/70 w-full h-0.5 transition-all rounded-xl ";
    return (
        <div role="button" className="w-8 h-7 sm:hidden flex flex-col justify-around transition-all p-1.5 rounded-xl hover:bg-bd/50 [&:hover>*]:bg-bd z-20" onClick={() => dispatch(toggleMobileMenu("auto"))}>
            <div className={child + (isToggle && "!bg-bd rotate-45 translate-y-1")}></div>
            <div className={child + (isToggle && "!bg-bd -rotate-45 -translate-y-1")}></div>
        </div>
    )
}
