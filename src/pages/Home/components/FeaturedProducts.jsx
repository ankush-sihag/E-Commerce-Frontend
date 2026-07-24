import products from "../../../data/products";
import "./FeaturedProducts.css";
import ProductCard from "../../../components/ProductCard/ProductCard";

function FeaturedProducts() {
    
    return (
        <section className="featured-products">
            <h2>Featured Products</h2>
            <div className="product-grid">
                {products.map((product)=>(
                   <ProductCard

                        key={product.id}

                        name={product.name}

                        price={product.price}

                        image={product.image}

                        rating={product.rating}

                        delivery={product.delivery}

                    />
                ))}
            </div>
        </section>
    );
}

export default FeaturedProducts;