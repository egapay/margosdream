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
            bottom-0"
        >
            <aside className="flex my-4">
                <p>Margo's Dream © 2024</p>
            </aside> 
            <nav className="flex">
                <IconContext.Provider value={{color:"black", size: "3rem"}}>
                    <a href={links["facebook"]} target="_blank" className="mx-2"><FaFacebook/></a>
                    <a href={links["instagram"]} target="_blank" className="mx-2"><FaInstagram/></a>
                    <a href={links["linktree"]} target="_blank" className="mx-2"><SiLinktree /></a>
                </IconContext.Provider>
            </nav>
        </footer>
    )
}

export default SiteFooter;

