import "./FeaturedProducts.css";

function FeaturedProducts() {
    const products = [
        {
            id:1,
            name:"iPhone 16",
            price:"₹79,999"
        },
        {
            id:2,
            name:"MacBook Pro",
            price:"₹1,79,999"
        },
        {
            id:3,
            name:"Samsung S26",
            price:"₹89,999"
        },
        {
            id:4,
            name:"Sony Headphones",
            price:"₹14,999"
        }
    ];

    return (
        <section className="featured-products">
            <h2>Featured Products</h2>
            <div className="product-grid">
                {products.map((product)=>(
                    <div
                        key={product.id}
                        className="product-card"
                    >

                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button>
                            View Product
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturedProducts;