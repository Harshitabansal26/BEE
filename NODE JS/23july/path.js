const path = require("path")

// console.log(__filename);
// console.log(__dirname);
// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// to find extension
// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute(__dirname));
// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));
console.log(path.format(path.parse(__filename)));

// console.log(path.join("/a","//b","c"))
// console.log(path.join("/a","//b","./c"))
// console.log(path.join("/a","/b","../c"))
console.log(path.join(__dirname,"data.json"));
console.log(path.join(__dirname,"data","data.json"));
// console.log(path.resolve("/a","b","c"));
// console.log(path.resolve("/a","/b","/c"));
console.log(path.dirname(__filename));
