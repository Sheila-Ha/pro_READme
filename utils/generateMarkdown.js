// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
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
  if (License !== "none") {
    return `## License

      Licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name} ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Features](#features)
  * [Contributing](#contributing)
  * [License](#license)
  * [Badges](#badges)
  * [Tests](#tests)
  * [Contact Me](#contact me)
    
  ## Installation 
  ${data.install}
  
  ## Usage 
  ${data.usage}
  
  ## Features
  ${data.features}

  ## Contributing
  ${data.contributing}

  ## License 
  This project is license under ${data.license}

  ## Badges
  ${data.badges}

  ## Tests
  ${data.test}

  ## Contact Me
    ### Name
    ${data.name}
    ### Github
    ${data.github}
    ### Email
    ${data.email}
`;
}
// use for importing Markdown in index

module.exports = generateMarkdown;
