#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() * 6 + 1); 
  
const answer =await inquirer.prompt([
    {
        message: "please guess a number betwwen 1-6",
        type: "number",
        name: "userGuessedNumber",
    },
]);

console.log(answer);

if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number");
} else {
    console.log ("alas! you guessed wrong number ");
};