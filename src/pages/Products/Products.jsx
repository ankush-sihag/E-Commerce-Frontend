import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css";

function Products() {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sortBy, setSortBy] = useState("default");
    
    const { cart, setCart } = useContext(CartContext); 
    console.log("products page", cart);   
    
    function addToCart(product) {
        console.log("Button Ckicked");
        console.log(product);
        const updatedCart = [
            ...cart,
            product
        ];
        console.log(updatedCart);
        setCart(updatedCart);
    }

    const filteredProducts = products.filter((product) => {

        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            product.category === category;

        return matchesSearch && matchesCategory;

    });

    const sortedProducts = [...filteredProducts];
    if (sortBy === "lowToHigh") {
        sortedProducts.sort((a, b) => {
            return a.price - b.price;
        });
    }

    if (sortBy === "highToLow") {
        sortedProducts.sort((a, b) => {
            return b.price - a.price;
        });
    }

    if (sortBy === "name") {
        sortedProducts.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    }

    return (

        <section className="products-page">

            <h1>All Products</h1>
            <div className="products-controls">
                <input

                    type="text"

                    placeholder="Search Products..."

                    value={search}

                    onChange={(event) => {

                        setSearch(event.target.value);

                    }}

                />

                <select

                    value={category}

                    onChange={(event) => {

                        setCategory(event.target.value);

                    }}

                >

                    <option value="All">All</option>

                    <option value="Mobiles">Mobiles</option>

                    <option value="Laptops">Laptops</option>

                    <option value="Accessories">Accessories</option>

                </select>

                <select
                    value={sortBy}
                    onChange={(event) => {

                        setSortBy(event.target.value);

                    }}
                >

                    <option value="default">Default</option>

                    <option value="lowToHigh">Price : Low to High </option>

                    <option value="highToLow"> Price : High to Low</option>

                    <option value="name">Name : A-Z</option>

                </select>
            </div>


            <div className="product-grid">

                {sortedProducts.map((product) => (

                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        rating={product.rating}
                        delivery={product.delivery}
                        addToCart={addToCart}
                        product={product}
                    />

                ))}

            </div>

        </section>

    );

}

export default Products;