import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import About from "./AboutUs";
import Contact from "./ContactUs";
import Appointments from "./Appointments";
const Main=()=>{
    return(
        <>
        
         <Routes>
                    <Route path="Home" element={<Home></Home>}></Route>
                    <Route path="AboutUs" element={<About/>}></Route>
                    <Route path="Appointments" element={<Appointments/>}></Route>
                    <Route path="ContactUs" element={<Contact/>}></Route>
         </Routes>
        </>
    )
}
export default Main;