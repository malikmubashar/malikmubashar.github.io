import Link from "next/link";
import ProfileButton from "../profile-button";
import MenuButton from "../menu-button";
import ListWrapper from "./list-wrapper";

export default function Header() {
    const lists = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Projects",
            href: "/projects",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Contact",
            href: "/contact",
        }
    ];
    return (
        <header className="p-2 pt-3 shadow-xl shadow-bd/5 flex ">
            <h1>Mubashar</h1>
            <nav className="flex items-center justify-end sm:justify-between w-full">
                <ListWrapper>
                    {lists.map(({ title, href }, index) => (
                        <li key={index} className="min-w-40 sm:min-w-14 my-2 sm:my-0 flex items-center gap-x-2 before:content-['-'] sm:before:content-[''] before:text-bd/30 pl-2 active:scale-95 transition-all">
                            <Link href={href} className="hover:bg-sy/40 w-full block sm:inline p-2 rounded-2xl pl-3">{title}</Link>
                        </li>
                    ))}
                </ListWrapper>
                <div className="flex gap-x-5 items-center">
                    <ProfileButton />
                    <MenuButton />
                </div>
            </nav>
        </header>
    )
}
