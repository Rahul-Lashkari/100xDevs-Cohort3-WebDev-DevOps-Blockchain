// Function that takes another function as an argument and calls it after 1 second delay
function delayedCall(anotherFn: () => void) {
    setTimeout(anotherFn, 1000);
}

function log() {
    console.log("Hello"); 
}

delayedCall(log); 