// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// import { watchFileSync } from 'fs';
// import { prompt } from 'inquirer';
// import { join } from "path";
//import generateMarkdown from "./utils/generateMarkdown";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "link",
    message: "What is your URL to access your application?"
  },
  {
    type: "editor",
    name: "description",
    message: "Describe you project, the purpose and how it functions."
  },
  {
    type: "input", //"editor"
    name: "installation",
    message: "What is the installation process?",
  },
  {
    type: "input", //"editor"
    name: "usage",
    message: "How do you use your application?",
  },
  {
    type: "input", //"editor"
    name: "features",
    message: "What does your project feature?",
  },
  {
    type: "editor",
    name: "Contributing",
    message: "What are contributing sources?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select a license for your project",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD3", "GNU3", "none"],
  },
  {
    type: "editor",
    name: "badges",
    message: "What badges apply?",
  },
  {
    type: "editor",
    name: "test",
    message: "What tests were performed?",
  },
  {
    type: 'editor',
    name: 'user story',
    message: 'What is your User Story?',
  },
  {
    type: 'editor',
    name: 'acceptance criteria',
    message: "What is your Acceptance Criteria?",
  }
];
// .then((responses) => {
//   console.log('responses :>> ', responses);
//   const filename = `${responses.title.toLowerCase()}json`;

//   fs.writeFile(filename, JSON.stringify(responses, null, 4), (err) =>
//   err ? console.error(err) : console.log('Success')
//   );
// })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log(responses);
    console.log(responses.description);
    writeToFile("dist/README.md", generateMarkdown(responses));
    console.log("Creating your Professional README.md File...");
  }).catch((err) => {
    console.log(err);
  });
}
//function call to initialize
init();
