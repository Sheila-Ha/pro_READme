// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
  name: 'Title',
  content: 'What is the name of your project?',
},
{
  name: '<Motivation',
  content: 'What was your motivation?',
},
{
  name: 'Why',
  content: 'Why did you build this project?',
},
{
  name: 'Problem Solve',
  content: 'What problem does it solve?',
},
{
  name: 'Learned',
  content: 'What did you learn?',
},
{
  name: 'Shine',
  content: 'What makes your project stand out?',
},
{
  name: 'Contents',
  type: 'checkbox',
  message: 'Would you like to include a Table of Contents?'
},
{
  type: 'Checkbox',
  name: 'Contents',
  choices: ['Installation', 'Usage', 'Credits', 'License'],
  message: 'Which ones would you like to add?'

}
  Table of Contents 

  [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  ## Badges
  ## Features
  How to Contribute
  ## Tests

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app 
init();
