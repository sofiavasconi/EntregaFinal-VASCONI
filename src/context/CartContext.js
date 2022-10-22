import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = ({children}) => {

        const [cart, setCart] = useState ([]);

        const addToCard = (item, cantidad) => {
            const producto = {...item, cantidad};
            if(isInCart(producto.id)) {

            }else {
                setCart ([...cart, producto]);
            }
        };

        const isInCart = (id) => cart.some((prod) => prod.id === id);

        const deleteAll = () => setCart([]);


    return (
        <CartContext.Provider value={{ cart, addToCard, deleteAll}}>
            {children}
        </CartContext.Provider>

    )
}

export default Provider


