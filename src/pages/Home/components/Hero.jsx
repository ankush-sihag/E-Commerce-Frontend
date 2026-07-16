import "./Hero.css";

function Hero() {

    return (

        <section className="hero">
            <div className="hero-left">
                <h1>
                    Shop Smart, Live Better
                </h1>

                <p>
                    Discover premium products with fast delivery,
                    secure payments and unbeatable prices.
                </p>

                <button>
                    Shop Now
                </button>
            </div>

            <div className="hero-right">
                <img
                    src="https://placehold.co/500x400"
                    alt="Hero"
                />
            </div>
        </section>

    );
}

export default Hero;