import { MdOutlineEmail } from "react-icons/md";

import MainNavbar from "./MainNavbar";
import SiteFooter from "./SiteFooter";
import data from "../assets/data.json";

const Contact = () =>{
    return(
        <>
            <MainNavbar 
                // isMain={false}
                brand={data.navbarInfo.brand}
                links={data.navbarInfo.links}
            />
            <div className='flex lg:h-[70%] h-fit w-full lg:absolute content-center justify-center flex-wrap font-manrope bg-siteBackground'>
                <div className='content-center mt-8'>
                    <h1 className='text-6xl lg:text-8xl animate-fadeIn1 font-manropeMedium'>Contact Us!</h1>
                </div>
                <div className='flex justify-evenly h-fit shadow m-4 w-full pt-[3rem] sm:pb-[3rem] lg:py-[10rem] text-center flex-col lg:flex-row'>
                    <div className='my-2 lg:mx-5 animate-fadeIn2'>
                        <h1 className='text-4xl xl:text-5xl font-manropeSemiBold'>Bill Youngman</h1>
                        <h2 className='text-xl xl:text-2xl'>President</h2>
                        <div className="items-center my-3" style={{display:"flex", justifyContent:"center"}}>
                            <MdOutlineEmail size={23}/><a href="mailto:bill@margosdream.com" className="mx-[.18rem] text-lg">bill@margosdream.com</a>
                        </div>
                    </div>
                    <div className='my-2 lg:mx-5 animate-fadeIn3'>
                        <h1 className='text-4xl xl:text-5xl font-manropeSemiBold'>Meghan Littlejohn</h1>
                        <h2 className='text-xl xl:text-2xl'>Vice President</h2>
                        <div className="items-center my-3" style={{display:"flex", justifyContent:"center"}}>
                            <MdOutlineEmail size={23}/><a href="mailto:meghan@margosdream.com" className="mx-[.18rem] text-lg">meghan@margosdream.com</a>
                        </div>
                    </div>
                    <div className='my-2 lg:mx-5 animate-fadeIn4'>
                        <h1 className='text-4xl xl:text-5xl font-manropeSemiBold'>Brooke Youngman</h1>
                        <h2 className='text-xl xl:text-2xl'>Vice President</h2>
                        <div className="items-center my-3" style={{display:"flex", justifyContent:"center"}}>
                            <MdOutlineEmail size={23}/><a href="mailto:brooke@margosdream.com" className="mx-[.18rem] text-lg">brooke@margosdream.com</a>
                        </div>
                    </div>
                    <div className='my-2 lg:mx-5 animate-fadeIn5'>
                        <h1 className='text-4xl xl:text-5xl font-manropeSemiBold'>Madison Youngman</h1>
                        <h2 className='text-xl xl:text-2xl'>Treasurer</h2>
                        <div className="items-center my-3" style={{display:"flex", justifyContent:"center"}}>
                            <MdOutlineEmail size={23}/><a href="mailto:madison@margosdream.com" className="mx-[.18rem] text-lg">madison@margosdream.com</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            <SiteFooter links={data.footer.links}/>
        </>
    )
}

export default Contact;