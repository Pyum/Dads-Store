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
          <a href="/" style={{color:"#fff", textDecoration:"none"}}>Shop</a>
          <a href="/about" style={{color:"#fff", textDecoration:"none"}}>About</a>
          <a href="/contact" style={{color:"#fff", textDecoration:"none"}}>Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div style={{display:"flex", gap:"20px"}}>
          <a href="https://www.facebook.com/abel.caballero.315/">
            <img src="/icons/facebook_icon.png" alt="Facebook" style={{width:"32px", height:"32px", objectFit:"contain"}}/>
          </a>
          <a href="https://www.instagram.com/el_chepo_503/">
            <img src="/icons/instagram_icon.png" alt="Instagram" style={{width:"32px", height:"32px", objectFit:"contain"}}/>
          </a>
          <a href="https://www.tiktok.com/@el_chepo_503">
            <img src="/icons/tiktok_icon.png" alt="TikTok" style={{width:"30px", height:"30px", objectFit:"contain"}}/>
          </a>
          <a href="https://www.youtube.com/@el_chepo_503/shorts">
            <img src="/icons/youtube_icon.png" alt="YouTube" style={{width:"34px", height:"34px", objectFit:"contain"}}/>
          </a>
        </div>
      </div>
    </footer>
  );
}
