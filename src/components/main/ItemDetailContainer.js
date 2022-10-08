import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { productos } from '../mock/productsMock';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    useEffect (() => {
        const traerProducto = () => {
            return new Promise ((res, rej) => {
                const producto = productos.find((prod) => prod.id === 1);
                setTimeout (() => {
                    res(producto);
                }, 2000);  
            });
        };
        traerProducto()
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="detalleDeProducto">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;