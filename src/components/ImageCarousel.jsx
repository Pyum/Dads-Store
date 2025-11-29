import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);
  const goTo = (index) => setCurrent(index);

  return (
    <div style={{position:"relative"}}>
      <img 
        src={images[current]} 
        alt={`product-${current}`} 
        style={{width:"100%", borderRadius:"8px"}}
      />

      {/* Arrows */}
      <button onClick={prev} style={{
        position:"absolute", top:"50%", left:"10px",
        transform:"translateY(-50%)",
        background:"rgba(0,0,0,0.5)",
        color:"white", border:"none", borderRadius:"50%", padding:"8px", cursor:"pointer"
      }}>{"<"}</button>
      <button onClick={next} style={{
        position:"absolute", top:"50%", right:"10px",
        transform:"translateY(-50%)",
        background:"rgba(0,0,0,0.5)",
        color:"white", border:"none", borderRadius:"50%", padding:"8px", cursor:"pointer"
      }}>{">"}</button>

      {/* Dots */}
      <div style={{
        display:"flex", justifyContent:"center", marginTop:"10px", gap:"5px"
      }}>
        {images.map((_, idx) => (
          <span 
            key={idx} 
            onClick={() => goTo(idx)}
            style={{
              width:"12px",
              height:"12px",
              borderRadius:"50%",
              background: idx===current ? "#000" : "#ccc",
              display:"inline-block",
              cursor:"pointer"
            }}
          />
        ))}
      </div>
    </div>
  );
}
