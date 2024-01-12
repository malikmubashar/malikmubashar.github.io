"use client";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/lib/reducers";

export default function ThemeButton() {
    const dispatch = useDispatch();
    const theme = useSelector((state: any) => state.theme.current);

    function themeHandle() {
        theme === "light" ? dispatch(setTheme("dark")) : dispatch(setTheme("light"));
        theme === "light" ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light");
    }

    return (
        <div role="button" className={"w-9 h-5 rounded-xl border relative " + (theme === "light" ? "bg-cl/20" : "bg-cl/20")} onClick={themeHandle}>
            <div className={"w-3 h-3 absolute rounded-full top-[50%] -translate-y-[50%] transition-all  bg-sy " + (theme === "light" ? "" : "bg-cl w-3.5 h-3.5")} style={{
                translate: theme === "light" ? "2px 0" : "18px 0"
            }}></div>
        </div>
    )
};

