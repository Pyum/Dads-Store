import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="container">
      <h2>Our Shirts</h2>
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",
        gap:"20px"
      }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
