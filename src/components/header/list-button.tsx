"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toggleMobileMenu } from "@/lib/reducers";

export default function Button(props: any) {
    const manipulatedProps = { ...props };
    const dispatch = useDispatch();

    manipulatedProps.onClick = () => {
        setTimeout(() => dispatch(toggleMobileMenu(false)), 500);
        props.onClick && props.onClick();
        console.log("clicked");
    };

    if (props.href) {
        manipulatedProps.style = {
            ...props.style,
            display: "list-item",
        };
        return (
            <li>
                {<Link {...manipulatedProps} />}
            </li>
        );
    }

    return (
        <li {...manipulatedProps} />
    );
}
