const express = require("express");
const app = express();
const fs= require('fs/promises')

// creating application level middleware
app.use(async(req,res,next) =>{
    console.log("Processing...");
    const log = `${Date.now()} ${req.method} ${req.url} \n`
    await fs.writeFile("logger.txt",log,{flag:"a"})

    next();       
                                    //    next() se hi hum next block pe jaare the i.e to get "hello world " , now as we have commented it out out helloword will not be printed
    // res.send("Terminated");
})

app.use((req,res,next) =>{
    req.newKey = "using middleware";
    next();
})

app.use(express.json());
app.use("/public",express.static("public"));

app.get("/get", (req, res) => {
  
    console.log(req.newKey);
    res.send("Get request");
});

app.post("/post", (req, res) => {
    console.log(req.body);
    res.send("post request");
});


app.listen(8000, () => {
    console.log("Server running at 8000 port");
  });