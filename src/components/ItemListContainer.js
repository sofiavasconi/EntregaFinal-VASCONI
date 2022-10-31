import React, { useEffect, useState } from 'react';
import ItemList from './main/ItemList';
import { useParams } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";
import { collection, getDocs, query, where } from 'firebase/firestore';
import {baseDeDatos} from '../services/firebaseConfig';



function ItemListContainer ({greeting}) {

    const [items, setItems] = useState([]);

    const [cargando, setCargando] = useState(true);


    const { marcaName } = useParams ();


    useEffect (() => {

        const coleccionDeProductos = collection (baseDeDatos, 'productos');


        const referencia = marcaName ? query(coleccionDeProductos, where("marca", "==", marcaName)) : coleccionDeProductos


        getDocs(referencia)
            .then((res) => {
                const productos = res.docs.map((prod)=>{
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(productos);
            })


            .catch((error) => {
                console.log(error);
            })

            .finally (() => {
                setCargando(false);
            })
            return () => setCargando (true);

            
        


        /*const traerProductos = () => {
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

        return () => setCargando(true);*/
    }, [marcaName]);

    return (
        <div>
            <main>
                {
                    cargando ? (
                    <PulseLoader 
                        align="center"
                    /> ) : (
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