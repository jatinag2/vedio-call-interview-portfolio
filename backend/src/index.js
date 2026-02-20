import dotenv from "dotenv"

dotenv.config();

import app from "./server.js" 


const port=process.env.PORT || 4000
app.listen(port,()=>{
     console.log(`server is listening on port ${port}`)
})