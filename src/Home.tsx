import React from "react";
import {Link} from "react-router-dom";
const Home=()=>{
    return(
        <>
        <div className="parent">
        <div className="menu">
            <p><h1><span>Welcome to<br/>

AMMA - ICON Hospital, Chennai .</span> </h1><br/><br/>

AMMA ICON Super Specialty Hospital is a private healthcare service provider equipped with world class technology is situated in the harbor city Chennai, TamilNadu.<br/>

 With advanced technology and medical treatments and procedures, along with expert staff, have distinguished us as a supreme healthcare organisation and contribute to provide maximumcare and support to the patients.<br/>

 AMMA ICON is 434-bed, state-of-the-art hospital with all diagnostic services, blood bank, medical and surgical therapeutic procedures, serves as a showcase of innovation and excellence in healthcare.</p>

        
       
        </div>
        <div className="dude">
        <aside>
            <Link to="#">AboutUs</Link>
            <Link to="#">ContactUs</Link>
            <Link to="#">Appointment</Link>
            <Link to="#">Service</Link>
            <Link to="#">Diagonistic Center</Link>
        </aside>
        </div>
       
        </div>
        
        </>
    )
}
export default Home;