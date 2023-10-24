#! /usr/bin/env node
import inquirer from "inquirer";
const ranNumber = Math.floor(Math.random() * 10) + 1;
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess: "
    }
]);
const { userGuess } = answers;
if (userGuess === ranNumber) {
    console.log("Yeah you got right answer buddy...");
}
else {
    console.log("Try again Failed...");
}
;
console.log("UserGuess", userGuess, "ranNumber", ranNumber);
