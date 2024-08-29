// import a from "./default.mjs"

// console.log(a(2,3))

// export default ki vjah se hum add ki jaga a use kr skte h 

import fun from "./default.mjs";
import {person as p , arr} from "./nameExport.mjs"

console.log(fun.add(2,3));
console.log(fun.sub(3,2));
// console.log(person);
console.log(p); 
console.log(arr);
