// import { Buffer } from "buffer"
const buffer = require('buffer')

const buffer1 = Buffer.from("sujay",'utf-8')

console.log(buffer1.toJSON()); // s = 115, u = 117, 
console.log(buffer1);

console.log(buffer1.toString());

buffer1.write("a");

console.log(buffer1.toString());
buffer1.write("s");

console.log(buffer1.toJSON());