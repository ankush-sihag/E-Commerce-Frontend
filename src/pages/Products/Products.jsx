import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchProducts } from "../../services/product.service";
import "./Products.css";

function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sortBy, setSortBy] = useState("default");

    useEffect(() => {
        loadProducts();
    }, []);

    async function loadProducts() {
        try {
            setLoading(true);
            const data = await fetchProducts();
            setProducts(data);
        }
        catch (error) {
            console.error(error);
            setError("Failed to load products.");
        }
        finally {
            setLoading(false);
        }
    }

    const filteredProducts = products.filter((product) => {

        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            product.category?.name === category ||
            product.category === category;
        return matchesSearch && matchesCategory;
    });

    const sortedProducts = [...filteredProducts];
    if (sortBy === "lowToHigh") {
        sortedProducts.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "highToLow") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "name") {
        sortedProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    if (loading) {
        return <h2>Loading Products...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
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
                    <option value="default">
                        Default
                    </option>

                    <option value="lowToHigh">
                        Price : Low to High
                    </option>

                    <option value="highToLow">
                        Price : High to Low
                    </option>

                    <option value="name">
                        Name : A-Z
                    </option>

                </select>

            </div>

            <div className="product-grid">

                {

                    sortedProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))
                }

            </div>

        </section>

    );
}

export default Products;