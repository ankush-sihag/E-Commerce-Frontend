import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";

function Navbar() {
    const { cart } = useContext(CartContext);

    return (
        <header className="navbar">
            <div className="logo">
                <h2>E Commerce</h2>
            </div>

            <div className="search-box">
                <input
                    type="text"
                    placeholder="search products..."
                />

                <button>Search</button>
            </div>

            <div className="nav-action">
                <NavLink to="/cart">
                    <button>Cart ({cart.length})</button>
                </NavLink>

                <NavLink to="/login">
                    <button>Login</button>
                </NavLink>
            </div>

            {/* <nav className="nav-links">
                <a href="#">Home</a>
                <a href="Products"></a>
                <a href="Categories"></a>
                <a href="About"></a>
                <a href="Contact"></a>

            </nav> */}
        </header>
    );
}

export default Navbar;