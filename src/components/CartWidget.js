import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';

function CartWidget () {
    return (
        <LinkContainer to='/cart'>
        <div className='divCarrito'>
            <div className="numeroCarrito">0</div>
            <FontAwesomeIcon icon={faCartShopping} className="iconCarrito"/>
        </div>
        </LinkContainer>
    )
}

export default CartWidget;