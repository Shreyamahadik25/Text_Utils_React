import React from "react";
import btsImage from './images/bts2.webp';

function About(){
    const style={
        width:"100vh",
        marginLeft:"50vh",
        marginTop:"10vh",
        backgroundColor:"pink"
    }
    return(
<>

<div className="card" style={style}>
  <img src={btsImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</>
    );
}
export default About;