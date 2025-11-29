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
        flexWrap: "wrap"
      }}>
        <div>
          <strong>El_Chepo_503</strong><br/>
          © {new Date().getFullYear()}
        </div>

        <div style={{display:"flex", gap:"15px"}}>
          <a href="/" style={{color:"#fff", textDecoration:"none"}}>Home</a>
          <a href="/" style={{color:"#fff", textDecoration:"none"}}>Shop</a>
          <a href="/about" style={{color:"#fff", textDecoration:"none"}}>About</a>
          <a href="/contact" style={{color:"#fff", textDecoration:"none"}}>Contact</a>
        </div>

        <div>
          <a href="https://www.facebook.com/abel.caballero.315/"><img src="/icons/facebook_icon.png" alt="Facebook" style={{width:"32px", height:"32px"}}/></a>
          <a href="https://www.instagram.com/el_chepo_503/"><img src="/icons/instagram_icon.png" alt="Instagram" style={{width:"32px", height:"32px"}}/></a>
          <a href="https://www.tiktok.com/@el_chepo_503"><img src="/icons/tiktok_icon.png" alt="TikTok" style={{width:"32px", height:"32px"}}/></a>
          <a href="https://www.youtube.com/@el_chepo_503/shorts"><img src="/icons/youtube_icon.png" alt="YouTube" style={{width:"32px", height:"32px"}}/></a>
        </div>
      </div>
    </footer>
  );
}
