const fileName = "./README.md";

// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// an array of questions for user input using the inquirer package
const questions = () => { 
    return inquirer.prompt([
       {
         type: 'input',
         name: 'title',
         message: 'What is the title of your repo project? (Required)',
         validate: titleInput => {
           if (titleInput) {
             return true;
           } else {
             console.log('Please enter the title of your repo project!');
             return false;
           }
         }
       },
       {
         type: 'input',
         name: 'description',
         message: 'Describe your project (Required)',
         validate: descriptionInput => {
           if (descriptionInput) {
             return true;
           } else {
             console.log('Please enter a description for your project!');
             return false;
           }
         }
       },
       {
         type: 'input',
         name: 'installation',
         message: 'Describe how to install your project (Required)',
         validate: installationInput => {
           if (installationInput) {
             return true;
           } else {
             console.log('Please enter installation instructions for your project!');
             return false;
           }
         }
       },
       {
         type: 'input',
         name: 'usage',
         message: 'Describe how to use your project (Required)',
         validate: usageInput => {
           if (usageInput) {
             return true;
           } else {
             console.log('Please enter usage instructions for your project!');
             return false;
           }
         }
       },
       {
         type: 'input',
         name: 'contribution',
         message: 'Describe how to contribute to your project (Required)',
         validate: contributionInput => {
           if (contributionInput) {
             return true;
           } else {
             console.log('Please enter contribution instructions for your project!');
             return false;
           }
         }
       },
       {
         type: 'input',
         name: 'testing',
         message: 'Describe how users can test your project (Required)',
         validate: testingInput => {
           if (testingInput) {
             return true;
           } else {
             console.log('Please enter testing instructions for your project!');
             return false;
           }
         }
       },
       {
         type: 'list',
         name: 'license',
         message: 'What license applies to this project? (required)',
         choices: ['MIT', 'GPL', 'Apache', "None/Don't Know"]
       },
       {
         type: 'input',
         name: 'github',
         message: 'What is your gitHub user name so collaborators can find your work? (Required)',
         validate: testingInput => {
           if (testingInput) {
             return true;
           } else {
             console.log('Please enter your gitHub name!');
             return false;
           }
         }
       },
       {
         type: 'input',
         name: 'email',
         message: 'What is your email address so collaborators can get in touch? (Required)',
         validate: testingInput => {
           if (testingInput) {
             return true;
           } else {
             console.log('Please enter your email address!');
             return false;
           }
         }
       }
     ]);
   }

// a function that writes the relevant data to a README.md file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, data, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'File created!'
        });
        console.log(`
  
        ===================================================
        ricks readme of ridiculous revelation has rendered!
        ===================================================
  
        `);
      });
    });
  }

// a function that initializes the app
function init() {
  // this runs the first function of questions to grab the user input.
    questions()
    // followed by a few promises that process this user input
    .then(projectData => {
        license = projectData.license;
        return generateMarkdown(projectData);
      })
      // calls the write file function once all relevant data is compiled
      .then(data => {
        return writeToFile(fileName, data);
      })
      .catch(err => {
        console.log(err);
      });
}

// a function call that initializes the app
init();