import { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { fetchProducts } from "../../../services/product.service";
import "./FeaturedProducts.css";

function FeaturedProducts() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFeaturedProducts();
    }, []);

    async function loadFeaturedProducts() {
        try {
            const data = await fetchProducts();
            setProducts(data.slice(0, 4));
        }
        catch (error) {
            console.error(error);
        }

        finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <h2>Loading Featured Products...</h2>;
    }

    return (
        <section className="featured-products">
            <h2>Featured Products</h2>
            <div className="product-grid">
                {
                    products.map((product) => (
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

export default FeaturedProducts;