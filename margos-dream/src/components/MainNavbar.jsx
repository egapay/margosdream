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
                <Navbar.Brand href="home" className='pl-10 py-2 md:text-4xl text-2xl font-bold text-white'>{props.brand}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='m-6 bg-white'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto md:text-2xl text-xl md:pr-10 text-center">
                        {props.links.map((link, index) => 
                            <Nav.Link 
                                href={link} 
                                key={link} 
                                className={`text-white md:mx-1 hover:bg-accent2 active:bg-primary
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