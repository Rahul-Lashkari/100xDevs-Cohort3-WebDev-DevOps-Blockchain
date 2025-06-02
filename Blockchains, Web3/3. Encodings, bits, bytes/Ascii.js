// Bytes to Ascii :-

// function bytesToAscii(byteArray) {
//   return byteArray.map(byte => String.fromCharCode(byte)).join('');
// }

// const bytes = [72, 101, 108, 108, 111]; 
// const asciiString = bytesToAscii(bytes);
// console.log(asciiString); // Output: "Hello"

// Ascii to bytes :-

// function asciiToBytes(asciiString) {
//   const byteArray = [];
//   for (let i = 0; i < asciiString.length; i++) {
//     byteArray.push(asciiString.charCodeAt(i));
//   }
//   return byteArray;
// }

// const ascii = "Hello";
// const byteArray = asciiToBytes(ascii);
// console.log(byteArray); // Output: [72, 101, 108, 108, 111]

// UInt8Array to ascii :-

// function bytesToAscii(byteArray) {
//   return new TextDecoder().decode(byteArray);
// }

// const bytes = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
// const asciiString = bytesToAscii(bytes);
// console.log(asciiString); // Output: "Hello"


// Ascii to UInt8Array :-

function asciiToBytes(asciiString) {
  return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

const ascii = "Hello";
const byteArray = asciiToBytes(ascii);
console.log(byteArray); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
