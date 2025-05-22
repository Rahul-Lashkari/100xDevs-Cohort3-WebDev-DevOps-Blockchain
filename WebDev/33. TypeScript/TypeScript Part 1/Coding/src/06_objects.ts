function greet(user: { name: string; age: number }) {
    console.log(`Hello ${user.name}, you are ${user.age} years old.`);
}

greet({
    name: "Pikachu",
    age: 22,
});

let user = {
    name: "Bulbasaur",
    age: 19,
};

greet(user);