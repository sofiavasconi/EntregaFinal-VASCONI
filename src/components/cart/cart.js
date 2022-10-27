import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {

    const { cart, borrarUno, borrarTodo } = useContext (CartContext);

    return (
        <div className="containerCarrito">
            {cart.map((prod) => (
                <div className="detalleCarrito" key={prod.id}>
                    <img src={prod.imagen} alt={prod.id} />
                    <div className="resumenCarrito">
                        <h2>{prod.titulo}</h2>
                        <h3>Cantidad: {prod.cantidad}</h3>
                        <h4>Subtotal: ${prod.precio * prod.cantidad}</h4>
                    </div>
                <FontAwesomeIcon icon={faTrash} className="trash1" onClick={()=>borrarUno(prod.id)} />
                </div>
            ))}
            <h2>Total: $0</h2>
            <FontAwesomeIcon icon={faTrash} className="trash2" onClick={borrarTodo} />
        </div>
    )
}

export default Cart;