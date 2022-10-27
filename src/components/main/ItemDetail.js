import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {

    const [unidades, setUnidades] = useState(0);

    const { agregarAlCarrito } = useContext(CartContext);

    const prueba = (numero) => {
        setUnidades(numero);
        agregarAlCarrito(item, numero);
    };

    return (
        <div className="divDetalle">
            <img src ={item.imagen} alt="" className="imagenDetalle" />
            <div className="subDiv">
                <h2>{item.titulo}</h2>
                <p className="detalle">
                    Zapatilla unisex con talles a elección. Envíos a todo el país.
                </p>
                
                {unidades === 0 ? (
                    <ItemCount prueba={prueba} stock={10} initial={1}/>
                ) : (
                    <Link to='/cart'>IR AL CARRITO</Link>
                )}
                
            </div>
        </div>
    );
};

export default ItemDetail;