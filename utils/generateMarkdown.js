// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "") {
    return "";
  }
  if (license === "MIT") {
    return `[![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (license === "SIL") {
    return `[![GitHub license](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]`;
  } else if (license === "Mozilla") {
    return `[![GitHub license](https://img.shields.io/badge/License-${license}-brightgreen.svg)]`;
  } else {
    return `[![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)]`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === "") {
    return "";
  }
  if (license === "GNU") {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else {
    return `https://opensource.org/licenses/${license}`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license) {
    const badge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    return [badge, licenseLink];
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
${renderLicenseSection(data.license)}

##Description
${data.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#Contributing)
- [Test](#Test)
- [Questions](#Questions)

##Installation
${data.installation}
##Usage
${data.usage}

##License
${data.license}

##Contributing 
${data.contributors}

##TestTest
${data.test}

##Questions 
Email me at: ${data.email} 
Find me on Github: https://github.com/${data.github}


`;
}

module.exports = generateMarkdown;
