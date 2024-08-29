// // const express = require("express");
// // const app = express();

// // const mockUserData =[{name : "weekend" , phone : "368274208",email :"uvhedwj" } ,
// //                     {name : "wee" , phone : "36827328",email :"uvhhgdvsd"},
// //                    { name : "hemlo" , phone : "34557745",email :"uikudhjscb"}
// // ]

// // app.get("/" , (req,res) =>{
// //     res.status(200).send(mockUserData)
// // })

// // app.get("/api/user/name/:name" , (req,res) =>{
// //     res.status(200).send(mockUserData)
// // })

// // app.get("/api/user/index/:index" , (req,res) =>{
// // console.log(req.params)
// // const id = parseInt (req.params.index)  // converting string to number

// // // using parseInt   
// // // console.log(id,typeof id)

// //     if(id>mockUserData.length || id<=0) return res.status(400).send
// //     ({msg:"Invalid Request"})

// //     return res.status(200).send(mockUserData[id-1])
// // })

// // app.listen(8000,()=>{
// //     console.log("Server starting on port 8000");
// // });


// const express = require("express");
// const app = express();

// const mockUserData = [
//     { name: "weekend", phone: "368274208", email: "uvhedwj" },
//     { name: "wee", phone: "36827328", email: "uvhhgdvsd" },
//     { name: "hemlo", phone: "34557745", email: "uikudhjscb" }
// ];

// app.get("/", (req, res) => {
//     res.status(200).send(mockUserData);
// });

// app.get("/api/user/name/:name", (req, res) => {
//     const user = mockUserData.find(user => user.name === req.params.name);
//     if (!user) return res.status(404).send({ msg: "User not found" });
//     res.status(200).send(user);
// });

// app.get("/api/user/:index", (req, res) => {
//     const id = parseInt(req.params.index); // converting string to number
//     if (isNaN(id) || id < 1 || id > mockUserData.length) {
//         return res.status(400).send({ msg: "Invalid Request" });
//     }
//     res.status(200).send(mockUserData[id - 1]);
// });


// app.listen(8000, () => {
//     console.log("Server starting on port 8000");
// });

const express = require("express");
const app = express();
app.use(express.json);

const mockUserData = [
    { name: "weekend", phone: "368274208", email: "uvhedwj" },
    { name: "ace", phone: "36827328", email: "uvhhgdvsd" },
    { name: "hemlo", phone: "34557745", email: "uikudhjscb" }
];

app.get("/", (req, res) => {
    res.status(200).send(mockUserData);
});

app.get("/api/user/:name", (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.index);
    if (id > mockUserData.length || id <= 0) return res.status(400).send({ msg: "Invalid request" });
    return res.status(200).send(mockUserData[id - 1]);
});

app.get("/api/user", (req, res) => {
    console.log(req.query);
    const { name } = req.query;
    if (!name) return res.status(400).send({ msg: "No user found." });
    else {
        const result = mockUserData.filter(item => item.name === "ace");
        res.send(result);
    };
});

app.post("/api/user/name", (req, res) => {
    mockUserData.push(req.body);
    res.status(201).send(mockUserData);
});

//put method
app.put("/api/user/:id",(req,res) =>{
    const {body,params} = req;
    const id = parseInt(params.id);
    if(id<=0 || id>mockUserData.length) return res.                    //
    status(400).send({msg:"Invalid Index"})

    mockUserData[id-1] = {...body};
    res.status(200).send(mockUserData);
    res.send("Updating user")
});

//patch request

app.patch("/api/user/:id" , (req,res)=>{
    res.send("User Updated");
})

app.listen(8000, () => {
    console.log("Server starting on port 8000");
});