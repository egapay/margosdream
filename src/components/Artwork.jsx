import MainNavbar from "./MainNavbar";
import SiteFooter from "./SiteFooter";
import data from "../assets/data.json";

const Artwork = () =>{
    return(
        <>
            <MainNavbar 
                isMain={false}
                brand={data.navbarInfo.brand}
                links={data.navbarInfo.links}
            />
            
            <SiteFooter links={data.footer.links}/>
        </>
    )
}

export default Artwork;