export default function Footer() {
  return (
    <footer style={{
      textAlign:"center",
      padding:"20px",
      background:"#222",
      color:"white",
      marginTop:"40px"
    }}>
      © {new Date().getFullYear()} Dad's Shirt Store
    </footer>
  );
}
