// Create an interface UserType that has the following properties: firstName, lastName, and age.
// Create a type TeamLead that is an intersection of Manager and Employee.

interface UserType {
    firstName: string,
    lastName: string,
    age: number,
};

function greet(user: UserType) {
    console.log(`Hello ${user.firstName} ${user.lastName}, you are ${user.age} years old.`);
}

let user: UserType = {
    firstName: "Pikachu",
    lastName: "pokemon",
    age: 21,
};

greet(user);


interface Manager {
    name: string,
    age: number,
}

interface Employee {
    name: string,
    department: string
}

type TeamLead = Manager & Employee; 

let t: TeamLead = {
    name: "bulbasaur",
    age: 21,
    department: "pokemon"
}