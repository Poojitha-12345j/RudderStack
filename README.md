```sh
# RudderStack Automation Tests

This repository contains automation tests for the RudderStack website using WebdriverIO and CucumberJS.

## Setup

1. Clone the repo:
   git clone https://github.com/Poojitha-12345j/RudderStack.git
   cd RudderStack
2. Install dependencies:
   npm install

## How to Run

Run the tests using WebdriverIO based On Environment:
   For Dev - npm run test:dev
   For Qa - npm run test:qa
   For Prod - npm run test:prod

## Technologies Used

Technologies:
WebdriverIO: (WDIO): A custom automation framework for browser and mobile testing.
CucumberJS: A tool for running automated tests written in plain language.
Axios: A promise-based HTTP client for making API calls from the browser or Node.js
JavaScript: Programming language used for writing the test scripts.
Gherkin: A language for writing Cucumber tests in a human-readable format 

## Project Structure

Project Structure:
RudderStack/
├── .github/
│   └── workflows/
├── src/
│   └── api/
│   └── web/
├── test/
│   └── features/
│       └── example.feature
│   └──step-definitions/
│   └──test-data/
├── utils/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── wdio.conf.js
└── README.md

##CI Integration

Continuous Integration:
GitHub Actions is configured to run the automation tests on every push to the repository. The workflows are defined in the .github/workflows/ directory.


```