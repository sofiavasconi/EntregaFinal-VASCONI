import React from 'react';
import Item from './Item';


const ItemList = (props) => {
    //mapeo de los productos
    return (
        <div className="item-list">
            {
                props.items.map((productos) => {
                    return <Item productos={productos} key={productos.id}/>
                })
            }
        </div>
    );
};

export default ItemList;