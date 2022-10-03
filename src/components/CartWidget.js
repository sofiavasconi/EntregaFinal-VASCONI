import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartWidget () {
    return (
        <div className='divCarrito'>
            <div className="numeroCarrito">0</div>
            <FontAwesomeIcon icon={faCartShopping} className="iconCarrito"/>
        </div>
    )
}

export default CartWidget;