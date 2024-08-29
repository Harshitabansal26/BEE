const { log } = require("console")
const fs =require("fs/promises")

async function readFile(){
try{
    const data = await fs.readFile("24july\temp.txt","utf-8")
    console.log(data);
}
    catch(err){
        console.log(err);
    }
}
// readFile()

async function writeFile(){
    try{
        await fs.writeFile("24july\write.txt","I am writing a file.")
    }
    catch(err){
        console.log(err);
    }
}
// writeFile()
async function copyFile(){
    try{
        const data = await fs.readFile("24july\temp.txt","utf-8")
        await fs.copyFile("24july\write.txt",data)
    }
    catch(err){
        console.log(err);
    }
}
// copyFile();
async function copyingFile(){
    try{
        await fs.copyFile("24july\temp.txt","24july\write.txt")
    }
    catch(err){
        console.log(err);
    }
}
// copyingFile()
async function deleteFile(){
    try{
        await fs.unlink("24july\write.txt")
    }
    catch(err){
        console.log(err);
    }
}
// deleteFile()
async function appendFile(){
    try{
        await fs.appendFile("24july\demo.txt","appending a file.")
    }
    catch(err){
        console.log(err);
    }
}
appendFile()
async function rename(){
    try{
        await fs.rename("demo.txt","newDemo.txt")
    }catch(err){
        console.log(err);
    }
}
// rename()

// (async function(){
//     const status = fs.watch("BEE/23 July/newDemo.txt")
//     // console.log(status);
//     for await (let event of status){
//         console.log(event);
//     }
// })()
async function stats(){
  try{
      const data = await fs.stat("24july/temp.txt")
      console.log(data);
  }
  catch(err){
      console.log(err);
  }
}
stats()