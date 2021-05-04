// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Please describe',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'Table of Contents',
      name: 'Table of Contents',
    },
    {
      type: 'input',
      message: 'Installation Instructions',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'Usage Resctrictions',
      name: 'Usage',
    },
    {
      type: 'input',
      message: 'Who is Licensing this?',
      name: 'License',
    },
    {
      type: 'input',
      message: 'Please name the Contributors to this',
      name: 'Contributors',
    },
    {
      type: 'input',
      message: 'Tests',
      name: 'Tests',
    },
    {
      type: 'input',
      message: 'FAQ',
      name: 'Questions',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
