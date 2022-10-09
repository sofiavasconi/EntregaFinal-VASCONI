import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);

    const sumar = () => {
        count < props.stock && setCount(count + 1);   
    };

    const restar = () => {
        count > props.initial && setCount(count - 1);
    };

    return (
        <div className="containerCount">
            <div className="botonesCount">
                <button disabled={count === props.initial} onClick={restar} className='restar'>-</button>
                <p className='numeroDeProductos'>{count}</p>
                <button disabled={count === props.stock} onClick={sumar} className='sumar'>+</button>
            </div>
            <FontAwesomeIcon icon={faCartPlus} className="carritoDetalle"/>
        </div>
    );
};

export default ItemCount;