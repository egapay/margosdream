import MainNavbar from "./components/MainNavbar"
import HeroSection from "./components/HeroSection";
import MainContent from "./components/MainContent";
import SiteFooter from "./components/SiteFooter";

import data from "./assets/data.json";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <>
      <MainNavbar 
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

export default App
