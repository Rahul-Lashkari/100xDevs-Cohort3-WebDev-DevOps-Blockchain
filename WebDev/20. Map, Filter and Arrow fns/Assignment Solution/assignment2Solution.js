/*
Assignment #2 - Create a map functions that takes an array and a transform function 
as input and returns the transformed array as output
*/


function map(array, transformFunc) {
    const transformedArray = [];

    for (let i = 0; i < array.length; i++) {
        transformedArray.push(transformFunc(array[i]));
    }

    return transformedArray;
}

const names = ["Alice", "Bob", "Charlie"];

const addGreeting = (name) => `Hello, ${name}!`;

const greetings = map(names, addGreeting);

console.log(greetings); // Output: ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie