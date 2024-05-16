import MainNavbar from "./MainNavbar"
import HeroSection from "./HeroSection";
import MainContent from "./MainContent";
import SiteFooter from "./SiteFooter";

import data from "../assets/data.json";

const Home = () =>{
    return(
        <>
            <MainNavbar 
                isMain={true}
                brand={data.navbarInfo.brand}
                links={data.navbarInfo.links}
            />
            <HeroSection 
                quote={data.heroInfo.heroQuote}
                img={data.heroInfo.heroImage}
            />
            <MainContent 
                title={data.mainContent1.title} 
                contentLeft={data.mainContent1.contentLeft}
                contentRight={data.mainContent1.contentRight}
            /><hr/>
            <MainContent 
                title={data.mainContent2.title} 
                contentLeft={data.mainContent2.contentLeft}
                contentRight={data.mainContent2.contentRight}
            />
            <SiteFooter links={data.footer.links}/>
      </>
    )
}

export default Home;