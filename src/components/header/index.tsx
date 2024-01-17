import Link from "next/link";
import ProfileButton from "../profile-button";
import MenuButton from "../menu-button";
import ListWrapper from "./list-wrapper";
import Button from "./list-button";
import { Satisfy } from "next/font/google";

const font = Satisfy({
    weight: "400",
    preload: false,
});

export default function Header() {
    const lists = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Projects",
            href: "/#projects",
        },
        {
            title: "About",
            href: "/#aboutme",
        },
        {
            title: "Contact",
            href: "/contact",
        }
    ];
    return (
        <header className="fixed w-full top-0 z-[60] shadow-2xl shadow-bd/10 border-b">
            <menu className="p-3 pt-3 bg-transparent backdrop-blur flex">
                <h1 style={font.style} className="grid place-content-center px-2 -rotate-6">PortFolio</h1>
                <nav className="flex items-center justify-end sm:justify-between w-full">
                    <ListWrapper>
                        {lists.map(({ title, href }, index) => (
                            <Button key={index} href={href} className="min-w-40 sm:min-w-14 my-2 sm:my-0 !flex items-center gap-x-6 before:content-['-'] sm:before:content-[''] before:text-bd/30 active:scale-95 transition-all hover:bg-sy/40 w-full sm:!block py-2 sm:py-1 px-3 rounded-2xl">
                                {title}
                            </Button>
                        ))}
                    </ListWrapper>
                    <div className="flex gap-x-5 items-center">
                        <ProfileButton />
                        <MenuButton />
                    </div>
                </nav>
            </menu>
        </header>
    )
}
