const ItemDetail = ({ item }) => {
    return (
        <div className="divDetalle">
            <img src ={item.imagen} alt="" className="imagenDetalle" />
            <div className="subDiv">
                <h2>{item.titulo}</h2>
                <p className="detalle">
                    Zapatilla unisex con talles a elección. Envíos a todo el país.
                </p>
            </div>
        </div>
    );
};

export default ItemDetail;