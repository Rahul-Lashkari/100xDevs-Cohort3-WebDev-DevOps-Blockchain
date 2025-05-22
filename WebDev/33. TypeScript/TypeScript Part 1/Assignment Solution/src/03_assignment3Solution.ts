// Create a function that takes another function as input, and runs it after 1 second.

function delayedCall(anotherFn: () => void) {

    setTimeout(anotherFn, 1000);
}

function printHello() {
    console.log("Hello");
}

delayedCall(printHello);