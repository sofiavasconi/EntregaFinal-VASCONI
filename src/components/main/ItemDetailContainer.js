import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { productos } from '../mock/productsMock';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const [cargando, setCargando] = useState(true);

    const {id} = useParams();

    useEffect (() => {
        const traerProducto = () => {
            return new Promise ((res, rej) => {
                const producto = productos.find((prod) => prod.id === Number(id)
                );
                setTimeout (() => {
                    res(producto);
                }, 2000);  
            });
        };
        traerProducto()
            .then((res) => {
                setItem(res);
                setCargando(false)
            })
            .catch((error) => {
                console.log(error);
            });
        return () => setCargando(true);
    }, [id]);

    return (
        <div>
            {
                cargando ? (
                <h1>Cargando</h1> ) : (
                <div className="detalleDeProducto">
                    <ItemDetail item={item}/>
                </div>
            )}
        </div>
    )
}

export default ItemDetailContainer;