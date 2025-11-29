export default function About() {
  return (
    <div className="container" style={{display:"flex", flexDirection:"column", gap:"40px"}}>
      
      {/* Section 1 */}
      <div style={{display:"flex", flexWrap:"wrap", gap:"20px", alignItems:"center"}}>
        <div style={{flex:1, minWidth:"250px"}}>
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla ac eros sit amet lectus eleifend sollicitudin. 
            Fusce feugiat sem ut nulla tincidunt, ac facilisis magna tincidunt.
          </p>
        </div>
        <div style={{flex:1, minWidth:"250px"}}>
          <img 
            src="https://dummyimage.com/500x500/000/fff.png&text=Temp+Pic" 
            alt="Our Story" 
            style={{width:"100%", borderRadius:"8px"}}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div style={{display:"flex", flexWrap:"wrap", gap:"20px", alignItems:"center"}}>
        <div style={{flex:1, minWidth:"250px"}}>
          <img 
            src="https://dummyimage.com/500x500/000/fff.png&text=Temp+Pic" 
            alt="Our Team" 
            style={{width:"100%", borderRadius:"8px"}}
          />
        </div>
        <div style={{flex:1, minWidth:"250px"}}>
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div style={{display:"flex", flexWrap:"wrap", gap:"20px", alignItems:"center"}}>
        <div style={{flex:1, minWidth:"250px"}}>
          <h2>Our Vision</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque vitae justo id libero tempus posuere. 
            Suspendisse potenti. Phasellus vel nunc sit amet nulla cursus viverra.
          </p>
        </div>
        <div style={{flex:1, minWidth:"250px"}}>
          <img 
            src="https://dummyimage.com/500x500/000/fff.png&text=Temp+Pic" 
            alt="Our Vision" 
            style={{width:"100%", borderRadius:"8px"}}
          />
        </div>
      </div>

    </div>
  );
}
