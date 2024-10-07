import { useEffect, useState } from "react";
import "../style/product.css";

const Product = ({ isMobile, hideFilter }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const response = await fetch("https://fakestoreapi.com/products");
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    const data = await response.json();
                    setProducts(data);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="product" >
            {Array.from({ length: isMobile ? 4 : hideFilter ? 8 : 6 }).map((_, index) => (
                <div key={index} className="skeleton_product_card">
                    <div className="skeleton_image"></div>
                    <div className="skeleton_text"></div>
                    <div className="skeleton_text short"></div>
                </div>
            ))}
        </div>
        )
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div
            className="product"
            style={{
                gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : hideFilter ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)',
                width: hideFilter ? "90%" : ""
            }}
        >
            {products.map((item) => (
                <div key={item.id} className="product_card">
                    <img className="product_image" src={item.image} alt={item.title} />
                    <span className="product_info">
                        <h5 className="product_title">{item.title}</h5>
                        <button className="wishlist_button">♡</button>
                    </span>
                    <p className="product_details">
                        <a href="/signin">Sign in</a> or <a href="/create-account">Create an account</a> to see pricing
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Product;
