// const add = require("./app");


console.log("hello world");
// console.log(add(2,3));

// const a = require("./app");
// console.log(a);

const {add,sub} = require("./app");
console.log(add(2,3));
console.log(sub(4,3));

let a = {
    name: "harshita",
    age:24
}

let b = a;

// b mein a ka memory address stored 
b.city = "Delhi";

a.country= "IN";

console.log(a);

b={};
console.log(b);