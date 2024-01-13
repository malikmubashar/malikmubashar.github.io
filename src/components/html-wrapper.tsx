"use client";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "@/lib/reducers";
import { useLayoutEffect } from "react";

export default function HTML({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme) {
            dispatch(setTheme(theme));
        }
    }, [dispatch]);
    return (
        <>
            <html lang="en" className={useSelector((s: any) => s.theme.current)}>
                {children}
            </html>
        </>
    );
}
