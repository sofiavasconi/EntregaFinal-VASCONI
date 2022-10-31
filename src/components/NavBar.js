import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { collection, getDocs } from 'firebase/firestore';
import { baseDeDatos } from '../services/firebaseConfig';
import { useEffect, useState } from 'react';

function NavBarPagina () {

    const [brands, setBrands] = useState ([]);

    useEffect(() => {
        const coleccionDeMarcas = collection(baseDeDatos, 'marcas')
        getDocs(coleccionDeMarcas)
            .then((res)=>{
                const marcas = res.docs.map((marca)=>{
                    return {
                        id: marca.id,
                        ...marca.data()
                    }
                })
                setBrands(marcas);
            })
            .catch((error)=>{

            })
    }, [])

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
                            {brands.map((marca)=>(
                                <LinkContainer key={marca.id} to={`/marcas/${marca.path}`}>
                                <NavDropdown.Item className='linkSubmenu'><h6>{marca.name}</h6></NavDropdown.Item>
                                </LinkContainer>
                                
                            ))}

                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>

                <CartWidget/>

            </Navbar>

        </div>
    )
}

export default NavBarPagina;