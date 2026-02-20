import dotenv from "dotenv"
import express from "express"
dotenv.config();

import app from "./server.js" 
import path from "path";


const __dirname=path.resolve();


app.get("/health",(req,res)=>{
     res.status(200).json({mag:"api in running and up"})
})
//make our app prduction ready

if(process.env.NODE_env=="production"){
     app.use(express.static(path.join(__dirname,"../frontend/dist")))

     app.get("/{*any}",(req,res)=>{
          res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
     })
}
const port=process.env.PORT || 4000
app.listen(port,()=>{
     console.log(`server is listening on port ${port}`)
})