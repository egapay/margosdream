import MainNavbar from "./MainNavbar";
import SiteFooter from "./SiteFooter";
import data from "../assets/data.json";
import { IoLogoVenmo } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

const Donate = () =>{
    const logoStyle = {
        fontSize: "10rem",
        color: "#008CFF"
    }

    return(
        <>
            <MainNavbar 
                // isMain={false}
                brand={data.navbarInfo.brand}
                links={data.navbarInfo.links}
            />
            <h1 className="text-center text-5xl pt-10">Donate!</h1>
            <div className="flex shadow m-10 p-10">
                <IoLogoVenmo style={logoStyle}/>
                <p>Venmo</p>
            </div>
            <SiteFooter links={data.footer.links}/>
        </>
    )
}

export default Donate;