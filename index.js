// require modules needed for this app
const fs = require('fs');
const inquirer = require('inquirer');
// imported generateMarkdown module only from generateMarkdown.js file.
const {generateMarkdown} = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: githubInput => {
        if (githubInput) {
        return true;
        } else {
        console.log('Please enter your GitHub username!'); 
        return false;  
        }
    } 
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: githubInput => {
        if (githubInput) {
        return true;
        } else {
        console.log('Please enter your GitHub username!'); 
        return false;  
        }
    } 
},
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project (Required)',
    validate: titleInput => {
        if (titleInput) {
        return true;
        } else {
        console.log('Please enter the title of your project!');
        return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: descriptionInput => {
        if (descriptionInput) {
        return true;
        } else {
        console.log('You need to enter a project description!');
        return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmTableOfContents',
    message: 'Would you like to add "Table of Contents" section?',
    default: true
},
{
    type: 'input',
    name: 'tableOfContents',
    message: 'Provide "Table of Contents" information:',
    when: ({ confirmTableOfContents }) => confirmTableOfContents
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
    validate: installationInput => {
        if (installationInput) {
        return true;
        } else {
        console.log('You need to enter steps to  install your project!');
        return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed. (Required)',
    validate: usageInput => {
        if (usageInput) {
        return true;
        } else {
        console.log('Provide instructions and examples for use!');
        return false;
        }
    }
},
{
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well. (Required)',
    validate: creditsInput => {
        if (creditsInput) {
        return true;
        } else {
        console.log('Provide contributor information and citations!');
        return false;
        }
    }
},
{
    type: 'input',
    name: 'contributing',
    message: 'Add guidelines for how others can contribute to your project. (Required)',
    validate: contributingInput => {
        if (contributingInput) {
        return true;
        } else {
        console.log('Provide guidelines to contribute your project!');
        return false;
        }
    }
},
{
    type: 'list',
    name: 'license',
    message: 'Would you like to apply license(s) to your project?',
    choices: ['Mozilla', 'MIT', 'Apache', 'None']
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
