import "./Categories.css";

function Categories() {

    const categories = [

        "Electronics",
        "Fashion",
        "Books",
        "Sports",
        "Beauty",
        "Home & Kitchen"
    ];

    return (
        <section className="categories">

            <h2>Shop By Category</h2>

            <div className="category-grid">
                {categories.map((category) => (
                    <div className="category-card">
                        {category}
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Categories;