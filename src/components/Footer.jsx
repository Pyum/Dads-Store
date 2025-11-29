import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{
      background: "#222",
      color: "#fff",
      padding: "20px",
      marginTop: "auto",
    }}>
      <div className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center"
      }}>
        {/* Left: Brand */}
        <div>
          © {new Date().getFullYear()} El_Chepo_503
        </div>

        {/* Center: Nav links */}
        <div style={{display:"flex", gap:"30px"}}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Shop</Link>
          <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
          <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
        </div>

        {/* Right: Social Icons */}
        <div style={{display:"flex", gap:"20px"}}>
          <a href="https://www.facebook.com/abel.caballero.315/">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" style={{width:"32px", height:"32px", objectFit:"contain"}}/>
          </a>
          <a href="https://www.instagram.com/el_chepo_503/">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" style={{width:"32px", height:"32px", objectFit:"contain"}}/>
          </a>
          <a href="https://www.tiktok.com/@el_chepo_503">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg" alt="TikTok" style={{width:"32px", height:"32px", objectFit:"contain"}}/>
          </a>
          <a href="https://www.youtube.com/@el_chepo_503/shorts">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" style={{width:"32px", height:"32px", objectFit:"contain"}}/>
          </a>
        </div>
      </div>
    </footer>
  );
}
