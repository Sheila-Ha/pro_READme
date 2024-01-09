// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    //return appropriate selected license badge
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `/n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License

      Licensed under the ${license} license.`;
  }
  return "";
}
//tabs/spacing matter for the output because it effects how the md file interprets content
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  try {
    // Variables to add table of contents items and content IF the user has entered data
    
    // Installation in Table of Contents
    let installationTOC = ``;
    // If the variable length is greater than 0, display text
    if(data.installation.length > 0) { 
      installationTOC = `
* [Installation](#installation)
    `;
    }
    // Installation content
    let installationContent = ``;
    // If the variable length is greater than 0, display text
    if(data.installation.length > 0) {
      installationContent = `
## Installation
${data.installation}
    `;
    }

    // User Story in Table of Contents
    let userStoryTOC = ``;
    // If the variable length is greater than 0, display text
    if(data.userStory.length > 0) { 
      userStoryTOC = `
  * [User Story](#user-story)
    `;
    }
    // User Story content
    let userStoryContent = ``;
    // If the variable length is greater than 0, display text
    if(data.userStory.length > 0) {
      userStoryContent = `
  ### User Story
  ${data.userStory}
    `;
    }

    // Acceptance Criteria in Table of Contents
    let acceptanceCriteriaTOC = ``;
    // If the variable length is greater than 0, display text
    if(data.acceptanceCriteria.length > 0) { 
      acceptanceCriteriaTOC = `
  * [Acceptance Criteria](#acceptance-criteria)
    `;
    }
    // Acceptance Criteria content
    let acceptanceCriteriaContent = ``;
    // If the variable length is greater than 0, display text
    if(data.acceptanceCriteria.length > 0) {
      acceptanceCriteriaContent = `
  ### Acceptance Criteria
  ${data.acceptanceCriteria}
    `;
    }
        
    // Wireframe in Table of Contents
    let wireframeTOC = ``;
    // If the variable length is greater than 0, display text
    if(data.wireframe.length > 0) { 
      wireframeTOC = `
  * [Wireframe](#wireframe)
      `;
    }
    // Wireframe content
    let wireframeContent = ``;
    // If the variable length is greater than 0, display text
    if(data.wireframe.length > 0) { 
      wireframeContent = `
  ### Wireframe
  [My Wireframe](${data.wireframe})
      `;
    }
   
    // Testing in Table of Contents
    let testingTOC = ``;
    // If the variable length is greater than 0, display text
    if(data.testing.length > 0) { 
      testingTOC = `
* [Testing](#testing)
    `;
    }
    // Test content
    let testingContent = ``;
    // If the variable length is greater than 0, display text
    if(data.testing.length > 0) {
      testingontent = `
## Testing
${data.testing}
    `;
    }
    
    // Questions in Table of Contents
    let questionsTOC = ``;
    // If the variable length is greater than 0, display text
    if(data.questions.length > 0) { 
      questionsTOC = `
* [Questions](#questions)
    `;
    }
    // Question content
    let questionsContent = ``;
    // If the variable length is greater than 0, display text
    if(data.questions.length > 0) {
      questionsContent = `
## Questions
${data.questions}
    `;
    }
    
    // Use the variables above in the returned string
    // $ data. = is user input
    // $ w/o date. = optional input
    return `# ${data.title}
by ${data.name} ${renderLicenseBadge(data.license)}

${data.badges}

## Description 
${data.description}

## Table of Contents
  ${installationTOC}
  ${userStoryTOC}
  ${acceptanceCriteriaTOC}
  ${wireframeTOC}

* [Usage](#usage)
* [Features](#features)
* [Contributing](#contributing)
* [License](#license)
${testingTOC}
${questionsTOC}
    
${installationContent}
  ${userStoryContent}
  ${acceptanceCriteriaContent}
  ${wireframeContent}
## Usage 
${data.usage}

## Features
${data.features}

## Contributing
${data.contributing}

## License 
This project is licensed under ${data.license}

${testingContent}
${questionsContent}
* Github -
[${data.github}](${data.github})

* Email -
${data.email}
`;
  } catch (error) {
    console.log(error);
  }
}
// use for importing Markdown in index

module.exports = generateMarkdown;
