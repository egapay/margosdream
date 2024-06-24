import React from 'react';
import {useMediaQuery} from 'react-responsive';

const MainContent = (props) =>{
    const isDesktop = useMediaQuery({query: '(min-width: 1024px)'});

    return(
        <>
            <div className='py-[10vh] font-manrope'>
                <h1 className='text-center md:text-5xl text-4xl font-manropeMedium'>{props.title}</h1>
                <div className="lg:flex justify-center m-10">
                {isDesktop ? 
                    <>
                        <div id="content-left" className='flex items-center lg:w-1/2 justify-center p-10 mx-4 shadow'>
                            {props.contentLeft.type === "img" ? 
                            <img src={props.contentLeft.data} className='max-w-[100%] h-auto object-scale-down rounded'/> :
                            <p className='xl:text-3xl xl:leading-normal text-lg w-3/4'>{props.contentLeft.data}</p>}
                        </div>
                        <div id="content-right" className='flex items-center lg:w-1/2 justify-center p-10 mx-4 shadow'>
                            {props.contentRight.type === "img" ? 
                            <img src={props.contentRight.data} className='max-w-[100%] h-auto object-scale-down rounded'/> :
                            <p className='xl:text-3xl xl:leading-normal text-lg w-3/4'>{props.contentRight.data}</p>}
                        </div>
                    </> :
                    <>
                        <div className='shadow'>
                            <div id="content-left" className='flex items-center lg:w-1/2 justify-center p-10'>
                                {props.contentLeft.type === "img" ? 
                                <img src={props.contentLeft.data} className='max-w-[100%] h-auto object-scale-down rounded'/> :
                                props.contentRight.type === "img" && <img src={props.contentRight.data} className='max-w-[100%] h-auto object-scale-down rounded'/>}
                            </div>
                            <div id="content-right" className='flex items-center lg:w-1/2 justify-center p-10'>
                                {props.contentRight.type === "text" ?
                                <p className='xl:text-3xl text-lg w-3/4'>{props.contentRight.data}</p> :
                                props.contentLeft.type == "text" && <p className='xl:text-3xl text-lg w-3/4'>{props.contentLeft.data}</p>}
                            </div>
                        </div>
                    </>
                }
                </div>
            </div>
        </>
    )
}

export default MainContent;