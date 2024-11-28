import { useState, useEffect } from "react";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        try {
            const response = await fetch("http://localhost:3001/products");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <h1>Home</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;