const inquirer = require("inquirer");

console.log("Thank you for trying Edutainment Africa.");

inquirer
  .prompt([
    {
      type: "confirm",
      name: "continue",
      message: "To continue, press Y. Press any other key to exit.",
    },
  ])
  .then((answers) => {
    console.log(`You answered: '${answers["continue"]}'. Thank you.`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Error. Environment not supported.");
    } else {
      // Something else when wrong
      console.log("Error. Unable to continue.");
    }
  });
