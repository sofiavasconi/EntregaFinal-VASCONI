import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarPagina () {
    return (
       <div> 
            <Navbar bg="light" expand="lg" sticky="top" class="px-3">
                <Container>
                    <Navbar.Brand className='urbanTitulo' href="#home"><h2><i><b>URBAN.</b></i></h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end flex-grow-1 pe-3 menu">

                        <Nav.Link href="#home" className='linkMenu'><h5>INICIO</h5></Nav.Link>
                        <Nav.Link href="#link" className='linkMenu'><h5>SOBRE NOSOTROS</h5></Nav.Link>
                        <Nav.Link href="#link" className='linkMenu'><h5>CATÁLOGO</h5></Nav.Link>

                        <NavDropdown title="MARCAS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" className='linkSubmenu'><h6>ADIDAS</h6></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2" className='linkSubmenu'><h6>NIKE</h6></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3" className='linkSubmenu'><h6>VANS</h6></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" className='linkSubmenu'><h6>CONVERSE</h6></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" className='linkSubmenu'><h6>PUMA</h6></NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            <CartWidget/>
            </Navbar>

        </div>
    )
}

export default NavBarPagina;