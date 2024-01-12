import Expand from "./expand";
import Link from "next/link";

type ProjectShowcaseBoxProps = {
    title?: string;
    shortDescription?: string;
    description?: string;
    image?: string;
    viewLink?: string;
    sourceLink?: string;
};

export default function ProjectShowcaseBox(props: ProjectShowcaseBoxProps) {
    const { title, shortDescription, description, image, viewLink, sourceLink } = props;
    return (
        <div className="bg-py w-[min(100%,300px)] rounded-lg border">
            {image && (<img src={image} alt="png" className=" rounded-t-[inherit] border-b w-full aspect-video object-cover" />)}
            <div className='pb-2'>
                <div className="p-4">
                    <h3 className="font-bold text-xl p-2">{title}</h3>
                    <p className="text-xs opacity-45 p-2.5">{shortDescription}</p>
                    <div className="flex justify-end gap-x-2 opacity-70 text-cl/30">
                        {viewLink && (<Link href={viewLink} className="py-2 px-3 text-sm rounded-full font-mono border hover:bg-sy">View</Link>)}
                        {sourceLink && (<Link href={sourceLink} className="py-2 px-3 text-sm rounded-full font-mono border hover:text-bd hover:border-bd">Source</Link>)}
                    </div>
                </div>
                {description && (<Expand>{description}</Expand>)}
            </div>
        </div>
    );
}