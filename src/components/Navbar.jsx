import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      background: "#000",
      padding: "15px",
      color: "#fff"
    }}>
      <div className="container" style={{display:"flex", justifyContent:"space-between"}}>
        <Link to="/" style={{color:"#fff", textDecoration:"none", fontWeight:"bold"}}>
          Dad's Shirt Store
        </Link>
        <div>
          <Link to="/" style={{color:"#fff", marginLeft: "15px"}}>Home</Link>
        </div>
      </div>
    </nav>
  );
}
