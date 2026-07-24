import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Cart() {
    const { cart } = useContext(CartContext);
    console.log("cart page:", cart);
    return (
        <section>
            <h1>Shopping Cart</h1>
            <h2>Total Items : {cart.length}</h2>
        </section>
    );
}

export default Cart;