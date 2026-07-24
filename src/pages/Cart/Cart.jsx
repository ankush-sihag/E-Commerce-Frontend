import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Cart() {
    const { cart } = useContext(CartContext);
    return (
        <section>
            <h1>Shopping Cart</h1>
            <h2>Total Items : {cart.length}</h2>
            {
                cart.map((product) => {
                    return (
                        <div key={product.id}>
                            <img
                                src={product.image}
                                alt={product.name}
                                width="120"
                            />
                            <h3>{product.name}</h3>
                            <p>₹{product.price}</p>
                            <p>⭐ {product.rating}</p>
                        </div>
                    );
                })
            }
        </section>
    );
}

export default Cart;