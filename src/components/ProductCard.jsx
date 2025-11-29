import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div style={{
      background:"#fff",
      borderRadius:"8px",
      padding:"15px",
      boxShadow:"0 0 10px rgba(0,0,0,0.1)",
      textAlign:"center"
    }}>
      <img 
        src={product.images[0]} 
        alt={product.name} 
        style={{width:"100%", borderRadius:"6px"}}
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button style={{
          padding:"10px 20px",
          border:"none",
          background:"#000",
          color:"#fff",
          borderRadius:"6px",
          cursor:"pointer"
        }}>
          View
        </button>
      </Link>
    </div>
  );
}
