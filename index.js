const inquirer = require("inquirer");

console.log("Thank you for trying Edutainment Africa.");

async function main() {
  let answer = await inquirer
    .prompt([
      {
        type: "confirm",
        name: "continue",
        message: "To continue, press Y. Press any other key to exit.",
      },
    ])
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log("Error. Environment not supported.");
      } else {
        // Something else went wrong
        console.log("Error. Unable to continue.");
      }
    });

  if (answer["continue"] === true) {
    answer = await inquirer.prompt([
      {
        type: "list",
        name: "country",
        message: "In which country would you like to start your tour?",
        choices: ["Botswana", "Egypt", "Ethiopia", "Guinea", "Nigeria"],
      },
    ]);
  } else {
    console.log("Good bye.");
    return;
  }

  console.log(`${answer["country"]} is a great choice. Let's go!`);
}

main();
