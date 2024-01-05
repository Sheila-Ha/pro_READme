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

  //verify if a readme has been made 
  //new file = write file
  //append to exit file
  fs.appendFile(filename, function(err) {
    if (err) {
      console.error(err);
    }
      console.log("Success, Your README.md file has been generated")
  });
}




// TODO: Create a function to initialize app
async function init() {
  try {
    // prompt inquirer questions
    const userResponses = await inquirer.prompt(questions);
    console.log("Your responses: ", userResponses);
    console.log("Thank you for your time");

    //requests github api for user info
    const userInfo = await appendFile.getUser(userResponses);
    console.log("Github user info: ", userInfo);

    //send inquirer userResponses and github userInfo to generateMarkdown
    console.log("Genereate your README")
    const markdown = generateMarkdown(userResponses, userInfo);
    console.log(markdown);

    //wire markdown to file
    await writerFileAsync('ExampleREADME.md', markdown);

  } catch (error) {
      console.log(error);
  }
};

init();