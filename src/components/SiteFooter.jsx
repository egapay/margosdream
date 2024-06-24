import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { IconContext } from "react-icons/lib";

const SiteFooter = ({links}) => {
    return(
        <footer className="flex 
            items-center 
            px-4
            py-2 
            bg-secondary 
            text-neutral-content 
            sm:justify-between 
            sm:flex-row 
            flex-col 
            justify-center
            absolute
            w-full
            bottom-0
            font-manrope"
        >
            <aside className="flex my-3">
                <p>Margo's Dream © 2024</p>
            </aside> 
            <nav className="flex">
                <IconContext.Provider value={{color:"black"}}>
                    <a href={links["facebook"]} target="_blank" className="mx-2"><FaFacebook size={"2.5rem"}/></a>
                    <a href={links["instagram"]} target="_blank" className="mx-2"><FaInstagram size={"2.5rem"}/></a>
                    <a href={links["linktree"]} target="_blank" className="mx-2"><SiLinktree size={"2.5rem"}/></a>
                </IconContext.Provider>
            </nav>
        </footer>
    )
}

export default SiteFooter;

