const HeroSection = (props) =>{
    const heroImage = {
        backgroundImage:
            `url(${props.img})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",

    };

    return(
        <>
            <div style={heroImage} className='md:items-start items-center'>
                <p className='md:pl-12 md:py-2 py-1 md:text-5xl text-4xl md:w-2/5 w-3/4 md:!text-start text-center font-semibold text-white animate-fadeIn1'>
                    {props.quote}
                </p>
                {/* <p className='md:pl-10 md:py-2 py-1 md:text-3xl text-xl text-white font-bold text-center'>{data.heroAuthor}</p> */}
            </div>
        </>
    )
}

export default HeroSection;