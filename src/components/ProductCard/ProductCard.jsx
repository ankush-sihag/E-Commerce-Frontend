import "./ProductCard.css";

function ProductCard(props){
    return(
        <div className="product-card">
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button>View Product</button>
        </div>
    );
}

export default ProductCard;