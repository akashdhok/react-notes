import "./Hero.css";
import React from "react";
import medium from "./medium.webp"
function Hero() {
  return (
    <>
    <center><h1 id="h1">Challak Billa</h1></center>
    <section id="section">
   <div id="form">
    <input type="text" placeholder="Enter name here" />
    <input type="text" placeholder="Enter age" />
    <input type="text" placeholder="Enter address" />
    <button>Submit</button>
   </div>
   <div>
    <img src={medium} alt="" height="200px" />
   </div>
     </section>
    </>
  );
}
export default Hero;
