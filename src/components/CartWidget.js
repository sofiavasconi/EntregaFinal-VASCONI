import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartWidget () {
    const {unidadesTotales} = useContext(CartContext) 
    return (
        <LinkContainer to='/cart'>
        <div className='divCarrito'>
            <div className="numeroCarrito">{unidadesTotales()}</div>
            <FontAwesomeIcon icon={faCartShopping} className="iconCarrito"/>
        </div>
        </LinkContainer>
    )
}

export default CartWidget;