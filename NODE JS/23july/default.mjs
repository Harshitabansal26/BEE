const add = (a,b) => {
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}

// export default add;
// export default sub; // will throw an error 

// hum ek hi baar export default kr skte h but hum ek hi export default m multiple modules ko export kr skte h 

export default {add,sub};