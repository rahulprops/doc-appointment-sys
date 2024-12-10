import express from 'express'
import 'dotenv/config'
const app=express()
const port= process.env.PORT;


app.get("/api" , async (req,res)=>{
console.log("hwllo")
console.log("hello")
})

app.listen(port,()=>{
    console.log(`server is running or port http://localhost:${port}`)
})