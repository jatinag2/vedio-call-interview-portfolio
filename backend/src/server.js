import express, { urlencoded } from "express"

const app=express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("hello from backend")
})
export default app;