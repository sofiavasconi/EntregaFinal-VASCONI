const ItemDetail = ({ productos }) => {
    return (
        <div>
            <img src ={productos.imagen} alt="" />
            <div>
                <h2>{productos.titulo}</h2>
                <p>
                    Zapatilla unisex con talles a elección. Envíos a todo el país.
                </p>
            </div>
        </div>
    );
};

export default ItemDetail;