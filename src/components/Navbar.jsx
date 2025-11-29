import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      background: "#000",
      padding: "10px 20px",
      color: "#fff",
    }}>
      <div className="container" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px"
      }}>
        {/* Brand */}
        <Link to="/" style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "22px"
        }}>
          El_Chepo_503
        </Link>

        {/* Nav Tabs */}
        <div style={{display: "flex", gap: "20px"}}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Shop</Link>
          <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
          <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
        </div>

        {/* Cart */}
        <div style={{display: "flex", gap: "20px"}}>
        </div>
      </div>
    </nav>
  );
}
