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
    // Use the variables above in the returned string
    return `# ${data.title}
by ${data.name} ${renderLicenseBadge(data.license)}

${data.badges}

## Description 
${data.description}

## Table of Contents
* [Installation](#*installation*)
  ${userStoryTOC}
  * [Acceptance Criteria](#acceptance-criteria)
  ${wireframeTOC}

* [Usage](#usage)
* [Features](#features)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation 
${data.installation}
  ${userStoryContent}
  ### Acceptance Criteria
  ${data.acceptanceCriteria}

  ${wireframeContent}
## Usage 
${data.usage}

## Features
${data.features}

## Contributing
${data.contributing}

## License 
This project is licensed under ${data.license}

## Tests
${data.test}

## Questions
${data.questions}

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
