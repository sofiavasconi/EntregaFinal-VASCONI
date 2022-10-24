import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemDetail from "../main/ItemDetail";

const Cart = () => {

    const { cart, deleteAll, deleteOne } = useContext (CartContext)

    return (
        <div>
           {
            cart.map((prod) => {
                <ItemDetail />
            })
           }
        </div>
    )
}

export default Cart;