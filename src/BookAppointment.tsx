import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
type UserSubmitForm = {
    "patientname":string,
    "age":string,
    "Address":string,
    "MobileNo":number,
    "Date":number,
    "Reason":string,
    
};
const BookAppointment = ()=>{ 
    const validationSchema = Yup.object().shape({
        "patientname" : Yup.string().required("patientname can't left blank"),
        "age":Yup.string().required("age can't left blank"),
        "Address":Yup.string().required("Address can't left blank"),
        "MobileNo":Yup.number().required("Mobile No can't left blank"),
        "Date":Yup.number().required("Date can't left blank"),
        "Reason":Yup.string().required("Reason can't left blank"),
        
    });
    const {register,
           reset,
           handleSubmit,
           formState : {errors}} = useForm<UserSubmitForm>({
        resolver : yupResolver(validationSchema)
    });
    const onSubmit = (data:UserSubmitForm)=>{
        console.log(data);
    }
    return(
        <>
      
            <div className="login-form">
            <fieldset>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <h1>BookAppointment </h1>
                        <label>Patient Name</label>
                        <input type="text"
                               {...register("patientname")}
                               className={`form-control ${errors.patientname?'is-invalid':""}`}></input>
                        <div className="invalid-feedback">{errors.patientname?.message}</div>
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input type="age"
                               {...register("age")}
                               className={`form-control ${errors.age?'is-invalid':""}`}></input>
                        <div className="invalid-feedback">{errors.age?.message}</div>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text"
                               {...register("Address")}
                               className={`form-control ${errors.Address?'is-invalid':""}`}></input>
                        <div className="invalid-feedback">{errors.Address?.message}</div>
                    </div>
                    <div className="form-group">
                        <label>Mobile No</label>
                        <input type="number"
                               {...register("MobileNo")}
                               className={`form-control ${errors.MobileNo?'is-invalid':""}`}></input>
                        <div className="invalid-feedback">{errors.MobileNo?.message}</div>
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input type="text"
                               {...register("Date")}
                               className={`form-control ${errors.Date?'is-invalid':""}`}></input>
                        <div className="invalid-feedback">{errors.Date?.message}</div>
                    </div>
                    <div className="form-group">
                        <label>Reason</label>
                        <input type="text"
                               {...register("Reason")}
                               className={`form-control ${errors.Reason?'is-invalid':""}`}></input>
                        <div className="invalid-feedback">{errors.Reason?.message}</div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Appointment</button>
                        <button type="reset" onClick={()=>reset()} className="btn btn-danger">Reset</button>
                    </div>
                </form>
                </fieldset>
            </div>
        
        </>
    )
}
export default BookAppointment;