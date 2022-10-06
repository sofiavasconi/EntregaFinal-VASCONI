import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { productos } from './mock/productsMock';

function ItemListContainer ({greeting}) {

    const [items, setItems] = useState([]);

    useEffect (() => {
        const traerProductos = () => {
            return new Promise ((res, rej) => {
                setTimeout (() => {
                    res(productos);
                }, 2000);  
            });
        };
        traerProductos()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1 className="greeting">{greeting}</h1>
            <div className="listaDeProductos">
                <ItemList items={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer;