import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <div className="divDetalle">
            <img src ={item.imagen} alt="" className="imagenDetalle" />
            <div className="subDiv">
                <h2>{item.titulo}</h2>
                <p className="detalle">
                    Zapatilla unisex con talles a elección. Envíos a todo el país.
                </p>
                <ItemCount stock={10} initial={1}/>
            </div>
        </div>
    );
};

export default ItemDetail;