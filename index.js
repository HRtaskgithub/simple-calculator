import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "Enter First Number", type: "Number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "Number", name: "SecondNumber" },
    {
        message: "Select one Operator to preform Operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statements If-Else
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "Dvision") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else
    console.log("Invalid input");
