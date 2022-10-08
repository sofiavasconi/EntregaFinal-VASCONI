import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

function NavBarPagina () {
    return (
       <div> 
            <Navbar bg="light" expand="lg" sticky="top" class="px-3">
                <Container>

                    <LinkContainer to='/'>
                        <Navbar.Brand className='urbanTitulo' ><h2><i><b>URBAN.</b></i></h2></Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end flex-grow-1 pe-3 menu">

                        <LinkContainer to='/'>
                            <Nav.Link className='linkMenu'><h5>INICIO</h5></Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to='/catalogo'>
                            <Nav.Link className='linkMenu'><h5>CATÁLOGO</h5></Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="MARCAS" id="basic-nav-dropdown">
                            <LinkContainer to='/marcas/adidas'>
                                <NavDropdown.Item className='linkSubmenu'><h6>ADIDAS</h6></NavDropdown.Item>
                            </LinkContainer>

                            <NavDropdown.Divider />

                            <LinkContainer to='/marcas/nike'>
                                <NavDropdown.Item className='linkSubmenu'><h6>NIKE</h6></NavDropdown.Item>
                            </LinkContainer>

                            <NavDropdown.Divider />

                            <LinkContainer to='/marcas/vans'>
                                <NavDropdown.Item className='linkSubmenu'><h6>VANS</h6></NavDropdown.Item>
                            </LinkContainer>

                            <NavDropdown.Divider />

                            <LinkContainer to='/marcas/converse'>
                                <NavDropdown.Item className='linkSubmenu'><h6>CONVERSE</h6></NavDropdown.Item>
                            </LinkContainer>

                            <NavDropdown.Divider />

                            <LinkContainer to='/marcas/puma'>
                                <NavDropdown.Item className='linkSubmenu'><h6>PUMA</h6></NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>

            <LinkContainer to='/cart'>
                <CartWidget/>
            </LinkContainer>

            </Navbar>

        </div>
    )
}

export default NavBarPagina;