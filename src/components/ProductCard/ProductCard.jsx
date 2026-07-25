import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard(props) {

    const product = props.product;

    const imageUrl =
        product.image ||
        "https://placehold.co/300x300?text=No+Image";

    return (

        <div className="product-card">
            <img
                src={imageUrl}
                alt={product.name}
                className="product-image"
            />

            <h3>{product.name}</h3>
            <p className="price">
                ₹ {product.price}
            </p>

            <p>
                ⭐ {product.rating || "No Rating"}
            </p>

            <Link
                to={`/products/${product._id}`}
            >

                <button>
                    View Details
                </button>

            </Link>
        </div>

    );
}

export default ProductCard;