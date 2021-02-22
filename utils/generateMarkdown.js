const mit = "![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)";
const gpl = "![GitHub license](https://img.shields.io/badge/license-GPL-blue.svg)";
const apache = "![GitHub license](https://img.shields.io/badge/license-Apache-blue.svg)";

const mitLink = "https://en.wikipedia.org/wiki/MIT_License";
const gplLink = "https://en.wikipedia.org/wiki/GNU_General_Public_License";
const apacheLink = "https://en.wikipedia.org/wiki/Apache_License";

const mitDescrip = "\nMassachusetts Institute of Technology (MIT) License is free license software.\nThe MIT License grants the software end user rights such as copying, modifying, merging, distributing, etc.\nIt is notable for what it does not contain, such as clauses for advertising and prohibition of the use of the copyright owner’s name for promotional uses.\nThe MIT License is a free and open source software similar to the Berkeley Software Distribution (BSD) License.";
const gplDescrip = "The GNU General Public License (GPL) is a free, copyleft license used primarily for software.\nThe GNU GPL allows users to change and share all versions of a program.\nGPL is provided through the Free Software Foundation, a nonprofit corporation that works to provide free software for the GNU Project.";
const apacheDescrip = "The Apache Software License (ASL) is a license scheme for free and open-source computer software (FOSS) written by the Apache Software Foundation (ASF).\nASL allows projects and software to be freely downloaded and used, may it be in whole or in part, for personal, company or commercial purposes and without concern for royalties.\nThe code is distributed openly and is allowed to be freely modified, redistributed or studied.\nThrough open-source code, Apache encourages users to voluntarily improve the design of the software.";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license == "MIT") {
    renderLicenseLink(license)
    return mit;
  } else if (license == "GPL") {
    return gpl;
  } else if (license == "Apache") {
    return apache;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
    if (license == "MIT") {
      return mitLink;
    } else if (license == "GPL") {
      return gplLink;
    } else if (license == "Apache") {
      return apacheLink;
    } else {
      return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license == "MIT") {
    return `## License

This project is covered under the MIT license
${mitDescrip}

-------------------------------------------------------------------
Here is a Wikipedia article on the license for further information:
${mitLink}
    
    `;
  } else if (license == "GPL") {
    return `## License

This project is covered under the GPL license
${gplDescrip}

-------------------------------------------------------------------
Here is a Wikipedia article on the license for further information:
${gplLink}
    
    `;
  } else if (license == "Apache") {
    return `## License

This project is covered under the Apache license
${apacheDescrip}

-------------------------------------------------------------------
Here is a Wikipedia article on the license for further information:
${apacheLink}
    
    `;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseLink(license);
  let licenseBadge = renderLicenseBadge(license);
  let licenseSection = renderLicenseSection(license);
  return `# ${data.title}
  ${licenseBadge}

## Description

${data.description}

***

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)



***

## Installation

${data.installation}

***

## Usage 

${data.usage}

***


${licenseSection}


## Contributing

${data.contribution}

***

## Tests

${data.testing}

***

## Questions

Checkout my GitHub profile ![here](https://github.com/${data.github}/)

If you have any questions, you can email me at: ${data.email}

`;
}

module.exports = generateMarkdown;