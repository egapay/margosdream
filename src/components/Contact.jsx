import MainNavbar from "./MainNavbar";
import SiteFooter from "./SiteFooter";
import data from "../assets/data.json";

const Contact = () =>{
    return(
        <>
            <MainNavbar 
                brand={data.navbarInfo.brand}
                links={data.navbarInfo.links}
            />
            <br/><br/><br/><br/><h1>Hello!</h1><br/><br/><br/><br/>
            <SiteFooter links={data.footer.links}/>
        </>
    )
}

export default Contact;