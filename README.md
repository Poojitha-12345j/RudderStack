# RudderStack Automation Tests

This repository contains UI and API automation test for the **RudderStack** platform using **WebdriverIO** and **CucumberJS** with an integrated API testing layer.

## Setup

### Clone the Project

```sh
git clone https://github.com/Poojitha-12345j/RudderStack.git
cd RudderStack
```

### Install dependencies

```sh
npm install
```

## Running Tests

Run WebdriverIO tests for a specific environment:

```sh
# For Dev
npm run test:dev

# For QA
npm run test:qa

# For Prod
npm run test:prod

```

## Technologies Used

```sh
WebdriverIO(WDIO) : Browser and mobile automation framework.
CucumberJS : BDD framework for writing human-readable tests.
Axios : HTTP client for API testing and backend validation.
JavaScript : Programming language for automation scripts.
Gherkin : Plain language format for writing Cucumber scenarios.
AllureReports : Rich test reporting with screenshots.
```

## Project Structure

```sh
RudderStack/
├── .github/workflows/        # CI/CD workflows (GitHub Actions)
├── api/                      # API testing layer
│   ├── clients/               # Axios client setup
│   ├── constants/             # API endpoints & test data
│   ├── requests/              # API request builders
│   └── services/              # API service methods
├── features/                 # Gherkin feature files
├── locators/                 # UI element locators per page
├── pages/                    # Page Object Model classes
├── reports/                  # Allure and other reports
├── steps/                    # Step definitions (API & Web)
├── testData/                 # Static JSON test data
├── utils/                    # Utilities (env loader, runtime store)
├── .env                      # Environment variables
├── wdio.conf.js              # WDIO configuration
└── README.md

```

## CI Integration

- GitHub Actions is configured to run tests automatically.
- Workflows are defined in .github/workflows/.