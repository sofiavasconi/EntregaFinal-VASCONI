import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

    const [show, setShow] = useState(true);

    const prueba = (numero) => {
        setShow(false);
    };

    return (
        <div className="divDetalle">
            <img src ={item.imagen} alt="" className="imagenDetalle" />
            <div className="subDiv">
                <h2>{item.titulo}</h2>
                <p className="detalle">
                    Zapatilla unisex con talles a elección. Envíos a todo el país.
                </p>
                <ItemCount prueba={prueba} stock={10} initial={1}/>

                {show ? (
                    <p>Este es el item count</p>
                ) : (
                    <button>Ir al carrito</button>
                )}
                
            </div>
        </div>
    );
};

export default ItemDetail;