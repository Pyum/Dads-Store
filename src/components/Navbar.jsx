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
        alignItems: "center",
      }}>
        {/* Brand on far left */}
        <Link to="/" style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "22px",
        }}>
          El_Chepo_503
        </Link>

        {/* Nav Tabs, centered */}
        <div style={{
          margin: "0 auto", // pushes tabs to center
          display: "flex",
          gap: "40px",
        }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Shop</Link>
          <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
          <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
        </div>

        {/* Right side empty for now */}
        <div style={{width:"50px"}}></div>
      </div>
    </nav>
  );
}
