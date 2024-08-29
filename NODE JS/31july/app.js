const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const app = express();

app.use(express.static("Public"));
app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
    const file = path.join(__dirname, "/index.html");
    res.sendFile(file);
});

app.post("/submit", async (req, res) => {
    res.send("Data recieved");
    console.log(req.body);
    try {
        const newData = req.body;
        let readData = await fs.readFile("db.json", "utf-8");
        readData = JSON.parse(readData);
        readData = [...readData, newData];
        await fs.writeFile("db.json", JSON.stringify(readData));
    } catch (error) {
        console.log(error);
    }
})

// app.get("/filter", async (req, res) => {
//     try {
//         // console.log(req.body);
//         const newData = req.body;
//         let readData = await fs.readFile("db.json", "utf-8");
//         readData = JSON.parse(readData);

//         // readData.push(newData);
//         // await fs.writeFile("db.json", JSON.stringify(readData, null, 2));
//         // res.send("Data received");
//         // readData = [...readData, newData]
//         const result = readData.filter(item => item.name[0] === 'a');
//         res.send(result);
//     } catch (err) {
//         console.error(err);
//     }
// });

app.listen(8000, () => {
    console.log("Server starting on port 8000");
});