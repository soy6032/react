import {
    Nav,
    NavItem,
    Navbar,
    NavbarBrand,
    Container,
  } from 'reactstrap';
  import { Link } from "react-router-dom";

const Menubar = () =>{
    return(
        <Container>
            <Navbar>
                <NavbarBrand href="/"><b>TESTWEB</b></NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link to="/login" className='nav-link text-secondary'>
                            LOGIN
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/join" className='nav-link text-secondary'>
                            JOIN
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default Menubar;