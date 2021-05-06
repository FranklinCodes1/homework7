// DEPENDENCIES!!!!!
const inquirer = require('inquirer');
const fs = require("fs");
//LETS GO
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title?',
      name: 'Title',
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "languages",
      choices: [
        "Javascript",
        "CSS",
        "HTML",
        "Python",
        "C++"
      ]
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "communicationMethod",
      choices: [
        "phone",
        "email",
        "face to face",
        "BEEP NOISES AS PREDICATED BY KANYE WEST", //please laugh
        "Zoom calls mon thru fri 10 am to 2:30 pm"
      ]
    },
    {
      type: 'input',
      message: 'Please describe your project',
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
  .then(({ name, languages, communicationMethod }) => {
    
    const newString = `Name: ${name}
Languages: ${languages.join(", ")} //if more than one language was chosen, it will 
Connect with my using the ${communicationMethod} method.`
    fs.writeFile("TESTSUCCESSREADME.md", newString, "utf8", (err) => {
      if (err) console.log(err);
      console.log("We wrote the file.")
    })
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the machine/client
    } else {
      // Something else went wrong sad face :(
    }
  });


  
