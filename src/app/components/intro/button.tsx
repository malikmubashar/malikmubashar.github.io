"use client";
import { AutoAwesome } from '@mui/icons-material';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';


export default function Button() {
    const ref = useRef(null);

    useGSAP(function () {
        
        gsap.fromTo(ref.current, {
            rotate: 0,
        }, {
            rotate: 360,
            duration: 2,
            ease: "elastic",
            repeat: 1,
        });
    });

    return (
        <button className="btn p-4 rounded-2xl bg-gradient-to-tr from-purple-500 to-bd text-white rotate-45" ref={ref}>
            <AutoAwesome />
        </button>
    )
}
