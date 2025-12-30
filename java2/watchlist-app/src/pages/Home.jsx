// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  // Fetch all products from your teacher's API
  useEffect(() => {
    fetch("https://js2-ecommerce-api.vercel.app/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
          marginTop: "1rem"
        }}
      >
        {products.map(product => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            {/* Show first image */}
            <img
              src={product.images[0]}
              alt={product.name}
              style={{ width: "100%", height: "200px", objectFit: "cover", marginBottom: "0.5rem" }}
            />
            <h3>{product.name}</h3>
            <p>{product.price} SEK</p>
            <Link to={`/product/${product._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
