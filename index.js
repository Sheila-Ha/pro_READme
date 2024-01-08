// TODO: Include packages needed for this application
const inquirer = require("inquirer"); //npm special software - const variable can not be reassigned
const fs = require("fs"); //const file system (fs) to read files on my pc 
const generateMarkdown = require("./utils/generateMarkdown"); //require is built in function, passing location name as argument

// TODO: Create an array of questions for user input
const questions = [ 
      {
        type: "input", // used for single line responses
        name: "title", //name of configuration
        message: "What is the title of your project?" //question prompt in console.log
      },
  {
    type: "editor", //used for multi line responses, saved in notepad
    name: "description",
    message: "Describe your project, the purpose and how it functions."
  },
  {
        type: "editor",
        name: "installation",
        message: "Add installation instructions",
      },
        {
          type: "editor",
          name: "userStory",
          message: "Add your user story",
        },
        {
          type: "editor",
          name: "acceptanceCriteria",
          message: "Add your acceptance criteria",
        },
        {
          type: "index",
          name: "wireframe",
          message: "Add your wireframe link",
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
    name: "contributing",
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
    message: "Add test instructions",
  },
  {
    type: "index",
    name: "questions", 
    message: "Type your question",
  },
    { 
      type: "index",
      name: "github",
      message: "Enter your github profile",
    },
    {
      type: "index",
      name: "email",
      message: "Enter your email address",
    }
 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { // function
  fs.writeFileSync(fileName, data); // write file (synchronous version)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => { //ask questions, then proceed with responses
    //console.log(responses);
    //console.log(responses.description);
    writeToFile("dist/README.md", generateMarkdown(responses)); //write a new readme file from responses using generateMarkdown
    //console.log("Creating your Professional README.md File...");
  }).catch((err) => {
    //console.log(err);
  });
}
//function call to initialize
init();
//console.log('initializing the app...');