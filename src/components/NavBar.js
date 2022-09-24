import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarPagina () {
    return (
       <div> 
            <Navbar bg="light" expand="lg" sticky="top" class="border-bottom border-dark">
                <Container className="navbar">
                    <Navbar.Brand className='urbanTitulo' href="#home"><i><b>URBAN.</b></i></Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end flex-grow-1 pe-3 menu">
                        <Nav.Link href="#home" className='linkMenu'>INICIO</Nav.Link>
                        <Nav.Link href="#link" className='linkMenu'>SOBRE NOSOTROS</Nav.Link>
                        <Nav.Link href="#link" className='linkMenu'>CATÁLOGO</Nav.Link>
                        <NavDropdown title="MARCAS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" className='linkSubmenu'>ADIDAS</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2" className='linkSubmenu'>NIKE</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3" className='linkSubmenu'>VANS</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" className='linkSubmenu'>CONVERSE</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" className='linkSubmenu'>PUMA</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            <CartWidget/>
            </Navbar>

        </div>
    )
}

export default NavBarPagina;