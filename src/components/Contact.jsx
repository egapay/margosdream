import React, { Component } from 'react'
import {
  FormTextArea,
  FormSelect,
  FormRadio,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormButton,
  Form,
} from 'semantic-ui-react'
import 'semantic-ui-css/components/form.min.css'

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

            <div className='flex justify-evenly h-fit shadow m-10'>
                <div className='m-10 content-center'>
                    <h1 className='text-5xl'>Contact Us!</h1>
                </div>
                <div className='m-10 content-center'>
                    <h1 className='text-3xl'>For all business inquiries:</h1>
                    <div className='pt-11'>  
                        <p>Email: </p>
                        <p>Phone Number: </p>
                    </div>
                  
                </div>
            </div>
            
            <SiteFooter links={data.footer.links}/>
        </>
    )
}

export default Contact;