import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
                    <Nav className="ml-auto md:text-xl lg:text-2xl text-2xl md:pr-10 text-center">
                        {props.links.map((link, index) => 
                            <Nav.Link 
                                href={link} 
                                key={link} 
                                className={`text-white md:mx-1 active:bg-accent2 hover:bg-[#E3B313]
                                ${index === props.links.length - 1 ? 'md:bg-black' : ''}`}
                            >   
                                {link}
                            </Nav.Link>
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