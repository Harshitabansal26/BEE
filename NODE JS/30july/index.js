const fs = require("fs");
const http = require("http");
const qs = require("querystring")
const ts = require("fs/promises")


const server = http.createServer(async (req, res) => {
    const url = req.url;
    const method = req.method; // Access the HTTP method , req is an object and we can destructure properties like url method etc out of it

    const log = `${Date.now()} with url ${url} and method ${method} \n`
    await ts.writeFile("log.txt", log, {flag:"a"})
    // await ts.appendFile("log.txt", log)
    console.log(url, method)

    if (url === "/register") {
        res.writeHead(200, { "Content-type": "text/html" });
        const data = fs.createReadStream("index (1).html");
        data.pipe(res);
    } 
    else if (url === "/userRegistered" && method === "POST") {
        // res.writeHead(200, { "Content-type": "text/plain" });
        // res.end("User reached");
        let body=[]
        req.on("data",(chunks)=>{
            body.push(chunks)
        })

        req.on("end",async ()=>{
            body=Buffer.concat(body).toString() // this will encode it  using utf8
            console.log(qs.parse(body))   // converts the data into objects
            // console.log(body)
            const newData=qs.parse(body)
            let readData=await ts.readFile("db.json","utf-8")
            readData=JSON.parse(readData)
            readData=[...readData,newData]
            await ts.writeFile("db.json",JSON.stringify(readData))
            res.end(JSON.stringify(readData))


        })

        //use of on function : this will bring all the data user has entered from frontedn to server

    } 
    else {
        res.writeHead(404, { "Content-type": "text/plain" });
        res.end("Not found 404");
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
