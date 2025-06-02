// encode :-
const bs58 = require('bs58');

function uint8ArrayToBase58(uint8Array) {
  return bs58.encode(uint8Array);
}

// decode :-
function base58ToUint8Array(base58String) {
  return bs58.decode(base58String);
}

const byteArray = new Uint8Array([72, 101, 108, 108, 111]); 
const base58String = uint8ArrayToBase58(byteArray);
console.log(base58String); 

const base58 = base58String; 
const byteArrayFromBase58 = base58ToUint8Array(base58);
console.log(byteArrayFromBase58);