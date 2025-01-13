/*
Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
*/

let counter = 0;
function callback(){
    console.clear();
    console.log(counter);
    counter++;
}

setInterval(callback, 1000);


// Other way~~
let counter2 = 0;
function increaseAndPrint() {
	console.log(counter)
	counter = counter + 1;
}
setInterval(increaseAndPrint, 1000);