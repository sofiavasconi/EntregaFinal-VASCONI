import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = ({children}) => {

        const [cart, setCart] = useState ([]);

        const addToCard = (item, cantidad) => {
            const producto = {...item, cantidad};
            if(isInCart(producto.id)) {
                sumarCantidad(producto);
            }else {
                setCart ([...cart, producto]);
            }
        };

        const sumarCantidad = (productoAgregado) => {
            const carritoActualizado = cart.map((productoDelCarrito) => {
                if (productoDelCarrito.id === productoAgregado.id) {
                    const productoActualizado = {
                        ...productoDelCarrito,
                        cantidad: productoDelCarrito.cantidad + productoAgregado.cantidad
                    };
                    return productoActualizado;
                }else {
                    return productoDelCarrito
                }
            })

            setCart (carritoActualizado);
        }

        const isInCart = (id) => cart.some((prod) => prod.id === id);

        const deleteAll = () => setCart([]);

        const deleteOne = (id) => {
            const productosFiltrados = cart.filter ((prod) => prod.id !== id)
            setCart(productosFiltrados);
        }


    return (
        <CartContext.Provider value={{ cart, addToCard, deleteAll, deleteOne}}>
            {children}
        </CartContext.Provider>

    )
}

export default Provider


