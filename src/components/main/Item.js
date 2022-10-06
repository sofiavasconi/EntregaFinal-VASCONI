import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Item = ({productos}) => {
    console.log (productos);
    return (
        <article className="card">
            <img src={productos.imagen} alt={productos.titulo} />
            <div className= "card-info">
                <h2>{productos.titulo}</h2>
                <h4>${productos.precio}</h4>
                <h5>{productos.marca}</h5>
            </div>
            <div className='agregarAlCarrito'>
                <FontAwesomeIcon icon={faPlus} className="masCarrito"/>
            </div>
        </article>
    );
};


export default Item; 