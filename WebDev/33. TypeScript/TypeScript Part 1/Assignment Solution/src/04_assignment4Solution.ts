// Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.

interface User {
    name: string;
    age: number;
}

const user = {
    name: "Pikachu",
    age: 19
}

function isLegal(user: User): boolean {
    
    if (user.age >= 18) {
        return true;
    } else {
        return false;
    }
}

const ans = isLegal(user);

console.log(ans);