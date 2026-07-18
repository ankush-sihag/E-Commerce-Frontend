import "./Home.css";
import Hero from "./components/Hero.jsx";
import Categories from "./components/Categories.jsx";
import FeaturedProducts from "./components/FeaturedProducts.jsx";

function Home() {

    return (
        <main>
            <Hero />
            <Categories />
            <FeaturedProducts />
        </main>
    );
}

export default Home;