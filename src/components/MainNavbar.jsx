import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

const MainNavbar = (props) =>{
    const navBar = {
        position: "absolute",
        backgroundColor: "rgba(51, 51, 51, 0.6) ",
        width: "100%"
    }

    return(
        <>
            <div style={navBar}>
                <Navbar bg="bg-transparent" expand="md">
                <Navbar.Brand href="home" className='pl-10 py-2 lg:text-4xl text-3xl font-bold text-white'>{props.brand}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='m-6 bg-white'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto md:text-xl lg:text-2xl text-2xl md:pr-10 text-center items-center">
                        {props.links.map((link, index) => 
                            <Link 
                                to={"/" + link.toString().toLowerCase()} 
                                target="_self"
                                key={link} 
                                className={
                                        `text-white 
                                    md:mx-2 
                                    p-2 
                                    active:bg-[#f3d36a98]
                                    hover:bg-primary1
                                    max-w-xs 
                                    transition 
                                    duration-300 
                                    ease-in-out 
                                    hover:shadow-lg 
                                    hover:shadow-black/90
                                    ${index === props.links.length - 1 ? 'md:bg-black' : ''}`
                                }
                            >   
                                {link}
                            </Link>
                            // mx-[40vw]
                        )}
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
            
        </>
    )
}

export default MainNavbar;