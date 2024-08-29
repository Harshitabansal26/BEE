const express = require("express");
const app = express();
const fs = require("fs/promises");
app.use(express.json());

app.get("/u", async (req, res) => {
    let readdata = await fs.readFile("db.json", "utf-8");
    res.send(readdata);
});

app.get("/products/:id", async (req, res) => {
    const {id} = req.params;
    console.log(id);
    let readdata = await fs.readFile("db.json", "utf-8");
    readdata = JSON.parse(readdata);
    let ans = readdata.filter(item => item.Id === id);
    res.send(ans);
});

app.delete("/products/:id", async (req, res) => {
    const { id } = req.query;
    let readdata = await fs.readFile("db.json", "utf-8");
    readdata = JSON.parse(readdata);
    const index = readdata.findIndex(item => item.Id === id);
    readdata.splice(index, 1);
    res.send(readdata);
});

app.post("/products", async (req, res) => {
    let readdata = await fs.readFile("db.json", "utf-8");
    readdata = JSON.parse(readdata);
    console.log(req.body);
    const newUser = req.body;
    const {Title,Id } = newUser;
    readdata = [...readdata, newUser];
    res.send(readdata);
});

app.put("/products/:id", async(req, res) => {
    let readdata = await fs.readFile("db.json", "utf-8");
    readdata = JSON.parse(readdata);
    const id = req.params.id;
    console.log(id);
    const index = readdata.findIndex(item => item.Id === id);
    if (index === -1) return res.status(400).send({ msg: "Invalid User I'd" });
    const updatedUser = { ...readdata[index], ...req.body };
    readdata[index] = updatedUser;
    res.send(readdata);
});

app.listen(8000);