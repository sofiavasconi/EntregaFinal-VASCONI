import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const Cart = () => {

    const { cart, precioTotal, borrarUno, borrarTodo } = useContext (CartContext);

    if(cart.length === 0){
        return <p className="vacio">CARRITO VACIO</p>
    }
        

    
    return (

        <div className="containerCarrito">
            {cart.map((prod) => (
                <div className="detalleCarrito" key={prod.id}>
                    <img src={prod.imagen} alt={prod.id} className="fotoCarrito" />
                    <div className="resumenCarrito">
                        <h2 className="tituloCarrito">{prod.titulo}</h2>
                        <p className="cantidadCarrito">Cantidad: {prod.cantidad}</p>
                        <p className="subCarrito">Subtotal: ${prod.precio * prod.cantidad}</p>
                    </div>
                <FontAwesomeIcon icon={faTrash} className="trash1" onClick={()=>borrarUno(prod.id)} />
                </div>
            ))}
            <h2 className="totalCarrito">TOTAL: ${precioTotal()}</h2>
            <FontAwesomeIcon icon={faTrash} className="trash2" onClick={borrarTodo} />
            <Link to="/form" className="linkForm">FINALIZAR LA COMPRA</Link>
        </div>
    )
}

export default Cart;