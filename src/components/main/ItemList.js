import React from 'react';
import Item from './Item';
import { productos } from '../mock/productsMock';

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