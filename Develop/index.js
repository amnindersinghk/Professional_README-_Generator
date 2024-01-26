const inquirer = require('inquirer');
const generateREADME = require('./utils/generateREADME');

// Use Inquirer to prompt the user for input
inquirer.prompt([
    // Ask questions about the project (title, description, installation, etc.)
    // ...

    // Use the answers to generate the README content
]).then((answers) => {
    const readmeContent = generateREADME(answers);
    // Save the content to a file (e.g., README.md)
    // ...
    console.log('README.md generated successfully!');
}).catch((err) => {
    console.error('Error occurred:', err);
});
