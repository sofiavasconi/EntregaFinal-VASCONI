import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";
import { collection, doc, getDoc } from 'firebase/firestore';
import { baseDeDatos } from '../../services/firebaseConfig';


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const [cargando, setCargando] = useState(true);

    const {id} = useParams();

    useEffect (() => {
        const coleccionDeProductos = collection(baseDeDatos, 'productos')

        const referencia = doc(coleccionDeProductos, id);

        getDoc(referencia)
            .then ((res) => {
                setItem({
                    id: res.id,
                    ...res.data(),
                });
            })

            .catch((error) => {
                console.log(error);
            })

            .finally (() => {
                setCargando(false);
            })
            return () => setCargando (true);

        /*const traerProducto = () => {
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
        return () => setCargando(true);*/
    }, [id]);

    return (
        <div>
            {
                cargando ? (
                <PulseLoader 
                    align="center"
                /> ) : (
                <div className="detalleDeProducto">
                    <ItemDetail item={item}/>
                </div>
            )}
        </div>
    )
}

export default ItemDetailContainer;