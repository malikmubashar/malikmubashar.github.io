"use client";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentRotate } from "@/lib/reducers";
import { useEffect } from "react";
import { angle } from "./index";

export default function Wrapper({ children, duration, transitionDuration, className, childLength }: { children: React.ReactNode, duration: number, className: string, transitionDuration: number, childLength: number }) {
    const dispatch = useDispatch();
    const index = useSelector((state: any) => state.currentRotate);

    useEffect(() => {
        document.querySelectorAll('*[data-child]')?.forEach((el, i) => {
            el.getAttribute('data-child') === String(index) ? el.classList.add('active') : el.classList.remove('active');
        });
        setTimeout(() => (dispatch(setCurrentRotate(childLength > index + 1 ? index + 1 : 0))), duration);
    }, [index, childLength, duration, dispatch]);

    return (
        <div data-child-active={index} className={'rounded-full flex justify-center items-center relative [&>*]:w-full [&>*]:flex [&>*]:absolute [&>*]:justify-between transition-all ' + className} style={{
            transform: `rotate(${angle * index}deg)`,
            translate: "50% 0",
            transitionDuration: `${transitionDuration}ms`,
            width: "25rem",
            height: "25rem",
        }}>
            {children}
        </div>
    )
}
