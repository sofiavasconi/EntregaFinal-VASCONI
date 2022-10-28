import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = ({children}) => {

        const [cart, setCart] = useState ([]);

        const agregarAlCarrito = (item, cantidad) => {
            const producto = {...item, cantidad};

            if(estaEnCarrito(producto.id)) {
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

        const estaEnCarrito = (id) => cart.some((prod) => prod.id === id);


        
        const borrarTodo = () => setCart([]);

        const borrarUno = (id) => {
            const productosFiltrados = cart.filter ((prod) => prod.id !== id)
            setCart(productosFiltrados);
        };

        const unidadesTotales = () => {
            let acumulador = 0
            const copia = [...cart]
            copia.forEach ((prod)=> {
                acumulador = acumulador + prod.cantidad
            })
            return acumulador
        }

        
        const precioTotal = () => {
            let totalCarrito = 0
            const copia = [...cart]
            copia.forEach ((prod)=> {
                totalCarrito = totalCarrito + prod.precio * prod.cantidad
            })
            return totalCarrito
        }
        

    return (
        <CartContext.Provider value={{ cart, agregarAlCarrito, precioTotal,  unidadesTotales,  borrarTodo, borrarUno}}>
            {children}
        </CartContext.Provider>

    )
}

export default Provider


