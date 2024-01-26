function generateREADME(answers) {
  // Use the answers to format the README content
  const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions about this project, please contact [${answers.username}](https://github.com/${answers.username}) at ${answers.email}.
`;

  return readmeContent;
}

module.exports = generateREADME;
