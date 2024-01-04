// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      name: 'Title',
      content: 'What is the name of your project?',
    },
    {
      name: '<Your motivation',
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
      type: 'Checkbox',
      name: 'Contents',
      choices: ['yes', 'no'],
      message: 'Would you like to include a Table of Contents?',
    },
    {
      type: 'Checkbox',
      name: 'Contents',
      choices: ['Installation', 'Usage', 'Credits', 'License', 'Badges', 'Features', 'How to Contribute', 'Tests'],
      message: 'Which ones would you like to add?',
    },
  ])
    .then((responses) => {
      console.log('responses :>> ', responses);
      const filename = `${responses.name.toLowerCase()}json`;

      fs.writeFile(filename, JSON.stringify(responses, null, 2), (err) =>
      err ? console.error(err) : console.log('Success')
      );
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}