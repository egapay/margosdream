import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const SiteFooter = ({links}) => {
    return(
        <footer className="flex 
            items-center 
            p-4 
            bg-secondary 
            text-neutral-content 
            sm:justify-between 
            sm:flex-row 
            flex-col 
            justify-center"
        >
            <aside className="flex my-4">
                <p>Margo's Dream © 2024</p>
            </aside> 
            <nav className="flex">
                <IconContext.Provider value={{color:"black", size: "3rem"}}>
                    <a href={links["facebook"]} target="_blank" className="mx-2"><FaFacebook/></a>
                    <a href={links["instagram"]} target="_blank" className="mx-2"><FaInstagram/></a>
                </IconContext.Provider>
            </nav>
        </footer>
    )
}

export default SiteFooter;

