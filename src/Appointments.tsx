import React from "react";
import {Link,Route,Routes} from "react-router-dom";
import BookAppointment from "./BookAppointment";
import ViewAppointment from "./ViewAppointment";
const Appointments=()=>{
    return(
        <>
        <div className='center'>
                    <div className='col-md-12' style={{background:""}}>
                        
                    </div>
        <div className="points">
            <Link to="/ViewAppointment">ViewAppointment</Link></div>

            <Routes>
                <Route path="/" element={<BookAppointment/>}></Route>
                <Route path="ViewAppointment" element={<ViewAppointment/>}></Route>
            </Routes>
          
           
        
        </div>
        
        
        </>
    )
}
export default Appointments;