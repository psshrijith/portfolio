import type { ReactElement } from "react";

const Headers = (): ReactElement => {
    const links = [
         {
             link: "About",
         },
         {
            link: "Skills",
         },
        {
            link: "Projects",
        },
        {
            link: "Contact"
        }
    ]
    return(
        <header className="flex justify-between items-center p-6 bg-white/80 text-gray-900 sticky top-0 z-50 backdrop-blur-md">
            <h1 className="text-xl font-bold">Shrijith</h1>
            <nav className="space-x-4">
                {links.map((link)=> (
                    <a href={`#${(link?.link)?.toLowerCase()}`} className="hover:text-blue-600" key={link?.link}>{link?.link}</a>
                ))}
            </nav>
        </header>
    )
}

export default Headers;