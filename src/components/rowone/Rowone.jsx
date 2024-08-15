import React from 'react'
import './row.css'
import habibi from './habibidrip.mp4'
function Rowone() {
  return (
    <div style={{padding:'10px'}}>
      <div className="container">
        <div className="con">
            <div className="para">
               <h2>Catch the latest blockbuster hits now! 🎬✨</h2>
                 <button > <a href="/movie" style={{textDecoration:'none',color:'black'}}>Explore</a></button>
            </div>
            <div className="pic">
               <video width="600"  controls autoPlay muted>
               <source src={habibi} type="video/mp4" />
                 Your browser does not support the video tag.
                 </video>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Rowone
