// Create a type SumInput that can be either a string or a number.
// Also Create a type TeamLead that is a combination of Employee and Manager.
// | is called union in TypeScript
// & is called intersection in TypeScript

type SumInput = string | number; 

function sum(a: SumInput, b: SumInput): SumInput {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }

    return a + b;
}

console.log(sum(1, 2)); 


type Employee = {
    name: string;
    startDate: Date;
};


type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee & Manager; 

const teamLead: TeamLead = {
    name: "kira",
    startDate: new Date(),
    department: "Software Eng",
};

console.log(teamLead);