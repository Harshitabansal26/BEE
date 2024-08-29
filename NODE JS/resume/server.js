const http = require("http")
const fs = require("fs")
const qs = require("querystring")
const ts = require("fs/promises")

const server = http.createServer((request, response) => {
    // response.writeHead(200,{"Content-type":"text/html"})
    // // const person ={
    // //     name:"jack",
    // //     age:24
    // // }
    // // response.end(JSON.stringify(person))

    const url=request.url;
    const method = request.method;
    const log = ${Date.now()} with url ${url} and method ${method} \n
    await ts.writeFile("log.txt",log,{flag:"a"});
    console.log(url,method);

     console.log(url,method)
    if(url == "/"){
         response.writeHead(200, { "Content-type": "text/html" })
        const data = fs.createReadStream("index.html")
        data.pipe(response)
    }else if(url == "/style.css"){
        response.writeHead(200, { "Content-type": "text/css" })
        const data = fs.createReadStream("style.css")
        data.pipe(response) 
    }
    else if(url == "/register"){
        response.writeHead(200, { "Content-type": "text/html" })
        const data = fs.createReadStream("register.html")
        data.pipe(response) 
    }
    else if(url=="/userRegistered" && method=="POST"){
        // response.end("User Reached")
        response.writeHead(200,{"Content-type":"application/json"})
        let body =[]
        request.on("data",(chunks)=>{
         body.push(chunks)
        })
        request.on("end",async()=>{
            body = Buffer.concat(body).toString();
            console.log(qs.parse(body))
            const newData = qs.parse(body)
            let readData = await ts.readFile("db.json","utf-8")
            readData = JSON.parse(readData)
            readData=[...readData,newData]
            await ts.writeFile("db.json",JSON.stringify(readData))
            response.end(JSON.stringify(readData))
        })
    }
    
    else{
        response.writeHead(404, { "Content-type": "text/plain" })
        response.end("This page Doesn't exist")
    }
})

server.listen(7000, () => {
    console.log("Server is Starting on 8000 Port")
})