import "./ProductCard.css";

function ProductCard(props){
    return(
        <div className="product-card">
            <div className="product-image">
                {props.image}
            </div>

            <div className="product-rating">
                {props.rating}
            </div>

            <h3>
                {props.name}
            </h3>

            <p className="product-price">
                {props.price}
            </p>

            <p className="delivery">
                {props.delivery}
            </p>

            <button
                onClick={() => {
                    props.addToCart(props.product)
                }}
            >
                Add To Cart
            </button>
        </div>
    );
}

export default ProductCard;