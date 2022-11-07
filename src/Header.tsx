import React from "react";
import {Link} from "react-router-dom";
import image from './Amma-hospitals.jpg';
const Header=()=>{
    return(
        <>
            <div className="hospital">
                <header>
                <section>
                <img src={image} alt=""></img>
                </section>
                    <div className="Hospital">
                <h1>AMMA HOSPITALS</h1></div>
                <div className="main">
                <Link to="/home" >Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/aboutUs">AboutUs</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/appointments">Appointments</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/contactUs">ContactUs</Link>&nbsp;&nbsp;&nbsp;&nbsp;
               </div>
               
                </header>
            </div>
        
        </>
    )
}
export default Header;