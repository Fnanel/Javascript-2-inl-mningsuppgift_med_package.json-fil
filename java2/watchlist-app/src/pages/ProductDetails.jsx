// src/pages/ProductDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../contex/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://js2-ecommerce-api.vercel.app/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{product.name}</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {product.images.map((img, index) => (
          <img key={index} src={img} alt={`${product.name} ${index}`} style={{ width: "200px" }} />
        ))}
      </div>
      <p>{product.description}</p>
      <h3>{product.price} SEK</h3>
      <button
        onClick={() =>
          addToCart({
            id: product._id,
            name: product.name,
            price: product.price,
            image: product.images[0], // store main image
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}
