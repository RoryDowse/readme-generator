// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown";

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
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
      message:
        "If you created an application or package and would like other developers to contribute it, please define the contribution process.",
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
  ])
  .then((data) => {
    writeToFile("README.md", data);
  });

// TODO: Create a function to write README file
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

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
