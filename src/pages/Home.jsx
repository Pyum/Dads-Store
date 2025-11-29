import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="container">
      <h2>Our Shirts</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum vel dolor sit amet nisl scelerisque sollicitudin. 
        Fusce feugiat sem ut nulla tincidunt, ac facilisis magna tincidunt.
      </p>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",
        gap:"20px",
        marginTop:"20px"
      }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <p style={{marginTop:"40px"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Praesent vehicula, justo at suscipit fermentum, 
        neque arcu hendrerit nisl, in laoreet nunc justo vel ligula.
      </p>
    </div>
  );
}
