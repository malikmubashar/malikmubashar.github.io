"use client";
import { useSelector } from "react-redux";

export default function DetailShow({ data }: { data: any[] }) {
    const index = useSelector((state: any) => state.currentRotate);
    const { title, description } = data[index];
    return (
        <div className="p-6">
            <h3 className="text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-tl to-bd from-red-500 sm:p-10 drop-shadow opacity-80 absolute top-10 left-10 sm:top-[25%] sm:left-[20%] sm:text-[5vw]">{title}</h3>
            <p className="text-center text-sm text-bd drop-shadow opacity-80 p-6" style={{
                minHeight: "10vh"
            }}>{description}</p>
        </div>
    )
}
