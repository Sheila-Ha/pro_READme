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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  try {
    return `# ${data.title}
by ${data.name} ${renderLicenseBadge(data.license)}

## Description 
${data.description}

## Table of Contents
* [Installation](#installation)
  * [User Story](#user-story)
  * [Acceptance Criteria](#acceptance-criteria)
  * [Wireframe](#wireframe)
* [Usage](#usage)
* [Features](#features)
* [Contributing](#contributing)
* [License](#license)
* [Badges](#badges)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation 
${data.installation}

* User Story
  ${data.userStory}

* Acceptance Criteria
  ${data.acceptanceCriteria}

* Wireframe
  ${data.wireframe}

## Usage 
${data.usage}

## Features
${data.features}

## Contributing
${data.contributing}

## License 
This project is licensed under ${data.license}

## Badges
${data.badges}

## Tests
${data.test}

## Questions
${data.questions}

* Github -
  ${data.github}

* Email -
  ${data.email}
`;    
  } catch (error) {
    console.log(error);
  }
}
// use for importing Markdown in index

module.exports = generateMarkdown;
