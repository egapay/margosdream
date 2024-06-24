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
            {/* https://react.semantic-ui.com/collections/form/ */}
            {/* https://www.emailjs.com/ */}

            {/* <Form className='m-10'>
                <FormGroup widths='equal'>
                <FormInput fluid label='First name' placeholder='First name' />
                <FormInput fluid label='Last name' placeholder='Last name' />
                </FormGroup>
                <FormTextArea label='About' placeholder='Tell us more about you...' />
                <FormButton>Submit</FormButton>
            </Form> */}
            <div className='flex lg:h-[70%] h-fit w-full lg:absolute content-center justify-center flex-wrap'>
                <div className='content-center mt-8'>
                    <h1 className='text-6xl lg:text-8xl animate-fadeIn1'>Contact Us!</h1>
                </div>
                <div className='flex justify-evenly h-fit shadow m-4 w-full pt-[3rem] pb-[8rem] sm:pb-[3rem] lg:py-[10rem] text-center flex-col lg:flex-row'>
                    <div className='my-2 lg:mx-5 animate-fadeIn2'>
                        <h1 className='text-4xl lg:text-5xl'>Bill Youngman</h1>
                        <h2 className='text-2xl lg:text-2xl'>President</h2>
                        <div className="items-center my-3" style={{display:"flex", justifyContent:"center"}}>
                            <MdOutlineEmail size={25}/><a href="mailto:bill@margosdream.com" className="mx-1 text-lg">bill@margosdream.com</a>
                        </div>
                    </div>
                    <div className='my-2 lg:mx-5 animate-fadeIn3'>
                        <h1 className='text-4xl lg:text-5xl'>Meghan Littlejohn</h1>
                        <h2 className='text-2xl lg:text-2xl'>Vice President</h2>
                        <div className="items-center my-3" style={{display:"flex", justifyContent:"center"}}>
                            <MdOutlineEmail size={25}/><a href="mailto:meghan@margosdream.com" className="mx-1 text-lg">meghan@margosdream.com</a>
                        </div>
                    </div>
                    <div className='my-2 lg:mx-5 animate-fadeIn4'>
                        <h1 className='text-4xl lg:text-5xl'>Brooke Youngman</h1>
                        <h2 className='text-2xl lg:text-2xl'>Vice President</h2>
                        <div className="items-center my-3" style={{display:"flex", justifyContent:"center"}}>
                            <MdOutlineEmail size={25}/><a href="mailto:brooke@margosdream.com" className="mx-1 text-lg">brooke@margosdream.com</a>
                        </div>
                    </div>
                    <div className='my-2 lg:mx-5 animate-fadeIn5'>
                        <h1 className='text-4xl lg:text-5xl'>Madison Youngman</h1>
                        <h2 className='text-2xl lg:text-2xl'>Treasurer</h2>
                        <div className="items-center my-3" style={{display:"flex", justifyContent:"center"}}>
                            <MdOutlineEmail size={25}/><a href="mailto:madison@margosdream.com" className="mx-1 text-lg">madison@margosdream.com</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            <SiteFooter links={data.footer.links}/>
        </>
    )
}

export default Contact;