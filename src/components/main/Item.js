import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Item = ({productos}) => {
    console.log (productos);
    return (
        <section className="card">
            <img className="imagenCard" src={productos.imagen} alt={productos.titulo} />
            <div className= "card-info">
                <h3 className='tituloCard'>{productos.titulo}</h3>
                <h5 className='precioCard'>${productos.precio}</h5>
                <FontAwesomeIcon icon={faCartPlus} className="masCarrito"/>
                <Link to={`/item/${productos.id}`}><h6 className='cardLink'>VER DETALLE</h6></Link>
            </div>
        </section>
        
    );
};


export default Item; 