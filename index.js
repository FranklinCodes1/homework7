// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
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
  .then((answers) =>
    response.confirm === response.password
      ? console.log('Success!')
      :
  );


// TODO: Create a function to write README file
fs.writeFile("READmeTEST.text", data, (err) => {
  if (err) {
    console.log("You Created The File!");
    
  }

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
