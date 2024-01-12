import { createElement, Fragment } from "react";
import Child from "./child";
import Wrapper from "./wrapper";

export const upTo = 8, pairs = upTo / 2, angle = 360 / upTo;

export default function RotatingSlider({ children, duration = 3000, className = "", transitionDuration = 300 }: { children: Array<React.ReactElement>, duration?: number, className?: string, transitionDuration?: number }) {
    const childrenArray = children.map((x: any, i: number) => (<Child key={i} index={i}>{x}</Child>)), len = childrenArray.length;
    const manipulatedChildren = [];

    if (len > 0)
        for (let i = 0; i < pairs; i++) {
            manipulatedChildren.push(createElement('div', {
                key: i,
                "data-index": i,
                style: {
                    rotate: `${i * -angle}deg`
                },
                // children: []
            }, <><Fragment>{childrenArray[i]}</Fragment>, <Fragment>{childrenArray[i + pairs]}</Fragment></>));
        };

    return (

        <Wrapper transitionDuration={transitionDuration} duration={duration} className={className} childLength={len}>
            {manipulatedChildren}
        </Wrapper>

    )
}
