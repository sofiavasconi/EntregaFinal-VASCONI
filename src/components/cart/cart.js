import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {

    const { cart, deleteAll, deleteOne } = useContext (CartContext);

    return (
        <div className="cart-container">
            {cart.map((prod) => (
                <div className="cart-detail" key={prod.id}>
                    <img src={prod.imagen} alt={prod.id} width="50px" />
                    <div className="cart-detail-info">
                        <h2>{prod.titulo}</h2>
                        <h3>Cantidad: {prod.cantidad}</h3>
                        <h3>Precio: ${prod.precio}</h3>
                        <h4>Subtotal: ${prod.precio * prod.cantidad}</h4>
                    </div>
                <FontAwesomeIcon icon={faTrash} className="trash1" onClick={()=>deleteOne(prod.id)} />
                </div>
            ))}
            <h2>Total: $0</h2>
            <FontAwesomeIcon icon={faTrash} className="trash2" onClick={deleteAll} />
        </div>
    )
}

export default Cart;