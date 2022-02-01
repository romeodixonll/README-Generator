// TODO: Include packages needed for this application
const fs = require("fs");
const inquires = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquires.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Enter in Github username");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Please enter your email");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "projectName",
      message: "What is your project name?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Please enter your project name.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a description of your project",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Please enter description of project");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "Please choose a license for the project",
      choices: ["Apache", "SIL", "GNU", "ISC", "MIT", "Mozilla"],
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Please choose a license");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Please explain how this app is used",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Please explain how this app is used");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "How to install project",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("How to install project");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "test",
      message: "How can you run test",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("How can you run test");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributors",
      message: "How can someone contribute",
    },
  ]);
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.error(err)
      : console.log("Your README was created successfully");
  });
};

// TODO: Create a function to initialize app
const init = async () => {
  const objAnswers = await questions();
  writeToFile("./dist/README.md", generateMarkdown(objAnswers));
};

// Function call to initialize app
init();
