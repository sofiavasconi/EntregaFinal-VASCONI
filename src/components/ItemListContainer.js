import React, { useEffect, useState } from 'react';
import ItemList from './main/ItemList';
import { productos } from './mock/productsMock';
import { useParams } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";


function ItemListContainer ({greeting}) {

    const [items, setItems] = useState([]);

    const [cargando, setCargando] = useState(true);


    const { marcaName } = useParams ();


    useEffect (() => {
        const traerProductos = () => {
            return new Promise ((res, rej) => {
                
                const productosFiltrados = productos.filter((prod) => prod.marca === marcaName)

                const prod = marcaName ? productosFiltrados : productos;

                setTimeout (() => {
                    res(prod);
                }, 2000);  
            });
        };
        traerProductos()
            .then((res) => {
                setItems(res);
                setCargando(false);
            })
            .catch((error) => {
                console.log(error);
            });

        return () => setCargando(true);
    }, [marcaName]);

    return (
        <div>
            <main>
                {
                    cargando ? (
                    <PulseLoader /> ) : (
                    <div className='catalogo'>
                        <h1 className="greeting">{greeting}</h1>
                        <div className="listaDeProductos">
                        <ItemList items={items}/>
                        </div>
                    </div> 
                )}
            
            </main>
        </div>
    )
}

export default ItemListContainer;