// index.js

// Importing necessary modules
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// Array of questions for user input
const questions = [
  {
    name: "start",
    type: "confirm",
    message: "Would you like to create a README?",
  },
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
    message: "Define the contribution process.",
  },
  {
    name: "tests",
    type: "input",
    message: "Provide instructions and examples for testing your project.",
  },
  {
    name: "license",
    type: "list",
    message: "Provide instructions and examples for testing your project.",
    choices: ["MIT", "Apache", "GPL", "None"],
  },
  {
    name: "github",
    type: "input",
    message: "Enter your GitHub username",
  },
  {
    name: "email",
    type: "input",
    message: "Enter your email address",
  },
];

// Function to initialize the app
// Prompts the user for input and generates a README file
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile("README-generated.md", data);
    })
    .catch((err) => {
      console.error(err);
    });
}

/**
 * Function to write the README file
 * Generates the markdown content using generateMarkdown function and writes it to the file
 * fileName: the name of the file to be created
 * data: an object containing the user input
 */
function writeToFile(fileName, data) {
  const markdownContent = generateMarkdown(data);
  fs.writeFile(fileName, markdownContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("${fileName} created successfully!");
    }
  });
}

// Function call to initialize the app
init();
