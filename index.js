// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      name: 'your motivation',
      message: 'What was your motivation?',
    },
    {
      name: 'why',
      message: 'Why did you build this project?',
    },
    {
      name: 'problem solve',
      message: 'What problem does it solve?',
    },
    {
      name: 'learned',
      message: 'What did you learn?',
    },
    {
      name: 'shine',
      message: 'What makes your project stand out?',
    },
    {
      type: 'checkbox',
      name: 'contents',
      choices: ['yes', 'no'],
      message: 'Would you like to include a Table of Contents?',
    },
    {
      type: 'checkbox',
      name: 'table of content',
      choices: ['Installation', 'Usage', 'Credits', 'License', 'Badges', 'Features', 'How to Contribute', 'Tests'],
      message: 'Which ones would you like to add?',
    },
    {
      name: 'user story',
      message: 'What is your User Story?',
    },
    {
      name: 'acceptance criteria',
      message: "What is your Acceptance Criteria?",
    }
  ])
    .then((responses) => {
      console.log('responses :>> ', responses);
      const filename = `${responses.title.toLowerCase()}json`;

      fs.writeFile(filename, JSON.stringify(responses, null, 4), (err) =>
      err ? console.error(err) : console.log('Success')
      );
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(filename);
  console.log(data);

fs.appendFile(filename, function(err) {
  
})
}


// TODO: Create a function to initialize app
function init() {}