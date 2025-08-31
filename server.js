import express from "express";
import sum from "./sum.js"
const app=express();
const PORT=8000;

app.listen(PORT,()=>{
    console.log(`server is listing on port ${PORT}`)
})
app.get("/home",async(req,res)=>{
    res.json({
        msg:"i am root"
    })
})
app.get("/getsum/:a/:b",async(req,res)=>{
const {a,b}=req.params;
res.json({
    ans:sum(parseInt(a),parseInt(b))
})

})