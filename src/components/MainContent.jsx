const MainContent = (props) =>{
    return(
        <>
            <div className='py-[10vh]'>
                <h1 className='text-center md:text-5xl text-4xl font-bold'>{props.title}</h1>
                <div className="lg:flex justify-center m-10">
                    <div id="content-left" className='flex items-center lg:w-1/2 justify-center p-10'>
                        {props.contentLeft.type === "img" ? 
                        <img src={props.contentLeft.data} className='max-w-[100%] h-auto object-scale-down rounded'/> :
                        <p className='xl:text-3xl text-lg w-3/4'>{props.contentLeft.data}</p>}
                        
                    </div>
                    <div id="content-right" className='flex items-center lg:w-1/2 justify-center p-10'>
                        {props.contentRight.type === "img" ? 
                        <img src={props.contentRight.data} className='max-w-[100%] h-auto object-scale-down rounded'/> :
                        <p className='xl:text-3xl text-lg w-3/4'>{props.contentRight.data}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent;