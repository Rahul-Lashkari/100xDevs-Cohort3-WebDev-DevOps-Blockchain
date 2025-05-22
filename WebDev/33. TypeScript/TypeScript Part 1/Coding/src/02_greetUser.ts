function greet(firstName: string): void {

    console.log(`Hello, ${firstName}!`);
}

greet('pikachu');


let greetUser = (firstName: string): void => {
    console.log(`Hello, ${firstName}!`);
}

greetUser('elsa');