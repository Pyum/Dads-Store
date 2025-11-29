import { useParams } from "react-router-dom";
import products from "../data/products";

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <div className="container">Product not found.</div>;

  return (
    <div className="container">
      <img 
        src={product.image}
        alt={product.name}
        style={{width:"100%", maxWidth:"400px", borderRadius:"8px"}}
      />
      <h2>{product.name}</h2>
      <p>${product.price}</p>

      <button style={{
        padding:"12px 20px",
        background:"#28a745",
        color:"white",
        border:"none",
        borderRadius:"6px",
        fontSize:"16px",
        cursor:"pointer"
      }}>
        Buy with Stripe (coming soon)
      </button>
    </div>
  );
}
