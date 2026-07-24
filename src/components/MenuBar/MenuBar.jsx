import { NavLink } from "react-router-dom";
import "./MenuBar.css";


function MenuBar() {
    return (
        <section className="menu-bar">

            <li>
                <NavLink to="/" className={({ isActive }) =>
                        isActive ? "active": ""
                    }>Home</NavLink>
            </li>

            <li>
                <NavLink to="/products" className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>Products</NavLink>
            </li>

            <li>
               <NavLink to="/categories" className={({ isActive }) =>
                        isActive ? "active": ""
                    }>Categories</NavLink>
            </li>
            <li>
                <NavLink to="/login" className={({ isActive }) =>
                        isActive ? "active": ""
                    }>Login</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({ isActive }) =>
                        isActive ? "active": ""
                    }>About</NavLink>
            </li>
        </section>
    );
}

export default MenuBar;