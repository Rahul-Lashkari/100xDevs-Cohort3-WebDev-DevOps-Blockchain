// Representing bits and bytes in JS

// Bit
const x = 0;
console.log(x);

// Byte
const y = 202
console.log(x);

// Array of bytes
const bytes = [202, 244, 1, 23]
console.log(bytes);

// UInt8Array
let bytes2 = new Uint8Array([0, 255, 127, 128]);
console.log(bytes)

let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300;