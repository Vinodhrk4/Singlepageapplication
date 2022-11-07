import React from "react";
const Contact=()=>{
    return(
        <>
         <div className="Contact">
            <fieldset>
            <h1>Contact Us</h1>
            <label><b>Address</b></label>
            <p> Nelson Chambers, No.1, "C" Block,<br/>
             Nelson Manickam Rd, Aminjikarai, <br/>
             Chennai, <br/>Tamil Nadu 600029</p>
             </fieldset>
         </div>
          <div className="Map">
            <map className="google map">
            <a href="https://www.google.com/maps/place/BiTS+(Brand+Image+Tech+Solutions)/@13.0709304,80.2246482,15z/data=!4m12!1m6!3m5!1s0x0:0x895e59edd5ea5d43!2sBiTS+(Brand+Image+Tech+Solutions)!8m2!3d13.0709304!4d80.2246482!3m4!1s0x0:0x895e59edd5ea5d43!8m2!3d13.0709304!4d80.2246482">Location</a>
            </map>
          </div>
        
        </>
    )
}
export default Contact;