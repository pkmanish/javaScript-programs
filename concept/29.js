// WeakMap in javascript.
// In javascript, Map is used to store key - value pairs.The key - value pairs can be of both primitive and non - primitive types.


const map1 = new Map();
map1.set('Value', 1);

const map2 = new WeakMap();
map2.set('Value', 2.3); // Throws an error

let obj = {name:"Vivek"};
const map3 = new WeakMap();
map3.set(obj, {age:23});