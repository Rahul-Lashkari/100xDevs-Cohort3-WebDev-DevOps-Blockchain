// funtion takes in a number and returns a boolean 
function isLegal(age: number): boolean {
    if (age > 18) {
        return true;
    } else { 
        return false;
    }
}

console.log(isLegal(2));
console.log(isLegal(20));