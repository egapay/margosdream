import MainNavbar from "./MainNavbar";
import SiteFooter from "./SiteFooter";
import data from "../assets/data.json";

const Contact = () =>{
    return(
        <>
            <MainNavbar 
                isMain={false}
                brand={data.navbarInfo.brand}
                links={data.navbarInfo.links}
            />
            {/* https://react.semantic-ui.com/collections/form/ */}
            <SiteFooter links={data.footer.links}/>
        </>
    )
}

export default Contact;