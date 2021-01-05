/****************************************
 * Run this sample : node sampleExecutor
 ****************************************/

const flato = require("./flato");

let obj = {
    a:1,
    b:2,
    c:{
        d:4,
        e:[5, {f: [6, [7,{h:8}]]}]
    }
}

let flatObject = flato(obj);
console.log(flatObject);