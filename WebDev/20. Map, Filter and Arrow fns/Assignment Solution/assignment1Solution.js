/*
Assignment #1 - Create a map functions that takes 2 inputs an array and a transformation callback/function 
and transform the array into a new one using transformation function
*/


function map(array, transformFunc) {
    const transformedArray = [];

    for (let i = 0; i < array.length; i++) {
        transformedArray.push(transformFunc(array[i]));
    }

    return transformedArray;
}

const numbers = [1, 2, 3, 4];

const double = (num) => num * 2; 

const doubledNumbers = map(numbers, double);

console.log(doubledNumbers); // Output: [2, 4, 6, 8]
