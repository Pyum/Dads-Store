import { useParams } from "react-router-dom";
import products from "../data/products";
import ImageCarousel from "../components/ImageCarousel";

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <div className="container">Product not found.</div>;

  return (
    <div className="container" style={{display:"flex", gap:"40px", flexWrap:"wrap"}}>
      <div className="container" style={{display:"flex", gap:"40px", flexWrap:"wrap"}}>
    {/* Left: Image */}
    <div style={{flex:1, minWidth:"250px"}}>
      <ImageCarousel images={product.images || [product.image]} />
    </div>
    {/* Right: Details */}
    <div style={{flex:2, minWidth:"300px"}}>
      <h1>{product.name}</h1>
      <p><strong>Color:</strong> {product.color}</p>
      <p><strong>Description:</strong> {product.description}</p>

      {/* Sizes */}
      <div style={{margin:"20px 0"}}>
        <strong>Sizes:</strong>
        <div style={{display:"flex", gap:"10px", marginTop:"5px"}}>
          {product.sizes.map(size => (
            <label key={size} style={{cursor:"pointer"}}>
              <input type="radio" name="size" value={size} style={{marginRight:"5px"}}/>
              {size}
            </label>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div style={{margin:"20px 0"}}>
        <strong>Colors:</strong>
        <div style={{display:"flex", gap:"10px", marginTop:"5px"}}>
          {product.colors.map(color => (
            <label key={color} style={{cursor:"pointer"}}>
              <input type="radio" name="color" value={color} style={{marginRight:"5px"}}/>
              {color}
            </label>
          ))}
        </div>
      </div>

      <button style={{
        padding:"12px 24px",
        background:"#28a745",
        color:"#fff",
        border:"none",
        borderRadius:"6px",
        fontSize:"16px",
        cursor:"pointer"
      }}>
        Buy with Stripe (coming soon)
      </button>
    </div>
  </div>

    </div>
  );
}
