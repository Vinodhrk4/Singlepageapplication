const mongodb = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const vivensClient = mongodb.MongoClient;


app.get("/ViewAppointment",(req,res)=>{
    vivensClient.connect("mongodb+srv://admin:admin@vinodh.onuvbjc.mongodb.net/?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("vivens");
            db.collection("bits").find().toArray((err,array)=>{
                if(err) throw err;
                res.json(array);
            })
        }
    });
});




app.post("/BookAppointment",(req,res)=>{
    const PatientName=req.body.PatientName;
    const Age=req.body.Age;
    const Address=req.body.Address;
    const MobileNo=req.body.MobileNo;
    const Date=req.body.Date;
    const Reason=req.body.Reason;

   const obj={"PatientName":PatientName,
              "Age":Age,
              "Address":Address,
              "MobileNo":MobileNo,
              "Date":Date,
              "Reason":Reason,




   }
    vivensClient.connect("mongodb+srv://admin:admin@vinodh.onuvbjc.mongodb.net/?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
       const db = connection.db("vivens");
       db.collection("bits").insertOne(obj,(err,result)=>{
        if(err)  throw err;
        else{
            res.json({"message":"record inserted successfully"});
        }
       })
        }

    })

 })


app.listen(8080,()=>{
    console.log("server running on port number 8080");
});