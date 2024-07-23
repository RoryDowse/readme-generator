// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([
  {
    name: "title",
    type: "input",
    message: "What is your project title?",
  },
  {
    name: "description",
    type: "input",
    message: "Please write a description of your project.",
  },
  {
    name: "installation",
    type: "input",
    message: "What are the steps required to install your project?",
  },
  {
    name: "usage",
    type: "input",
    message: "Provide instructions and examples for use.",
  },
  {
    name: "contributing",
    type: "input",
    message:
      "If you created an application or package and would like other developers to contribute it, please define the contribution process.",
  },
  {
    name: "tests",
    type: "input",
    message: "Provide instructions and examples for testing your project.",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
