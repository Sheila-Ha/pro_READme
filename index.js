// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "editor", //used for multi line responses, saved in notepad
    name: "description",
    message: "Describe you project, the purpose and how it functions."
  },
  {
    type: "editor",
    name: "installation",
    message: "Add installation instructions.",
  },
  {
    type: "editor",
    name: "usage",
    message: "How do you use your application?",
  },
  {
    type: "editor",
    name: "features",
    message: "What does your project feature?",
  },
  {
    type: "editor",
    name: "Contributing",
    message: "What are contributing sources?",
  },
  {
    type: "rawlist", //select 1 from choices
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
    message: "Add test instructions.",
  },
  { 
    type: 'input',
    name: 'author',
    message: 'Add your name',
  },
  {
    type: 'input',
    name: 'github',
    message: 'add your github address',
  }
  {
    type: 'input',
    name: 'email',
    message: 'add your email address'
  }
 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    //console.log(responses);
    //console.log(responses.description);
    writeToFile("dist/README.md", generateMarkdown(responses));
    //console.log("Creating your Professional README.md File...");
  }).catch((err) => {
    //console.log(err);
  });
}
//function call to initialize
init();
//console.log('initializing the app...');