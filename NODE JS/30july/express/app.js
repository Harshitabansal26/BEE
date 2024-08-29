/*
    package.json - has dependencies of things you are using
    package.lock.json - gives exact verions of dependencies

*/

const express=require("express")
const path=require("path")

const app=express()
app.use("/public/",express.static("public"))

// const info={
//     name:"harshita",
//     age:19,
//     phone:8968200020
// }


app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/index.html"))
    
})


app.listen(3000,()=>{
    console.log("Server starting at port 3000")
})