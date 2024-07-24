// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "Apache") {
    return "[![License: Apache v2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } else if (license === "GPL") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache") {
    return "https://opensource.org/license/apache-2-0";
  } else if (license === "GPL") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "This project is licensed under the MIT license.";
  } else if (license === "Apache") {
    return "This project is licensed under the Apache license.";
  } else if (license === "GPL") {
    return "This project is licensed under the GNU license.";
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);

  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseBadge}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}
${data.github}
${data.email}

## Questions
`;
}

export default generateMarkdown;
