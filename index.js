// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is '
    },
    {
      type: 'checkbox',
      name: 'table of content',
      choices: ['Installation', 'Usage', 'Features', 'Contributing', 'License', 'Badges', 'Tests'],
      message: 'Which ones would you like to add?',
    },
    {
      type: 'input',
      name: 'user story',
      message: 'What is your User Story?',
    },
    {
      type: 'input',
      name: 'acceptance criteria',
      message: "What is your Acceptance Criteria?",
    },
    {
      type: 'input',
      name: 'usage',
      message: 'List technologies used with this project',
    }
    {
      type: 'checkbox',
      name: 'license',
      message: 'Select a license for your project',
      choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD3", "GNU3", "none"],
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
  return fs.watchFileSync(path.join(process.cwd(), fileName), data);
}
  console.log(filename);
  console.log(data);

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile(".dist/READ.md", generateMarkdown({ ...responses }));
});
}

init();