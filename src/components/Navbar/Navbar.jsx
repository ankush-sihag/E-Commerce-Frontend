import "./Navbar.css";

function Navbar() {
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
                <button>Cart</button>
                <button>Login</button>
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