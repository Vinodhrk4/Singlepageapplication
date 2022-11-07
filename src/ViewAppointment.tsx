import axios from "axios";
import {useEffect,useState} from "react";
const ViewAppointment = ()=>{
    const [res,setRes] = useState<any[]>([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/ViewAppointment").then((posRes)=>{
            const {data} = posRes;
            setRes(data);
        },(errRes)=>{
            console.log(errRes);
        })
    },[]);
    return(
        <>
            <table>
                <tr>
                    <th>_id</th>
                    <th>PatientName</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Mobile No</th>
                    <th>Date</th>
                    <th>Reason</th>
                </tr>

                {
                    res.map((element,index)=>{
                        return(
                            <tr key={index}>
                                <td>{element._id}</td>
                                <td>{element.PatientName}</td>
                                <td>{element.Age}</td>
                                <td>{element.Address}</td>
                                <td>{element.MobileNo}</td>
                                <td>{element.Date}</td>
                                <td>{element.Reason}</td>
                            </tr>
                        )
                    })
                }



            </table>



        </>
    )
}
export default ViewAppointment;