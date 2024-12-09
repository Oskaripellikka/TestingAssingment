[![Coverage Status](https://coveralls.io/repos/github/Oskaripellikka/TestingAssingment/badge.svg?branch=main)](https://coveralls.io/github/Oskaripellikka/TestingAssingment?branch=main)

# Software Testing Assignment

## Purpose of this Repository
This repository contains the implementation for the second part of the Software Testing course assignment at Tampere University. The goal of this assignment is to design and execute unit tests on the provided utility library and integrate the testing process with GitHub Actions for Continuous Integration (CI). The repository is also configured to track test coverage using Coveralls.

## What is Included in This Repository
- **Source Code:** The utility library under test, which includes various JavaScript functions.
- **Testing Framework:** Jest is used for running the unit tests.
- **GitHub Actions CI Workflow:** A configuration for automatically running tests on every commit and pull request to the main branch.
- **Coveralls Integration:** Test coverage reports are generated and uploaded to Coveralls, where the coverage status can be tracked.
## How to Set Up and Run Tests Locally

### 1. **Install dependencies**
Ensure you have Node.js (version 14 or higher) installed. Run the following command to install the necessary packages:
```
npm install
```

### 2. **Run the tests**
After installing the dependencies, run the tests with:
```
npm test
```
### 3. **Generate coverage report**
To generate a test coverage report locally, use:
```
npm test -- --coverage
```
## Continuous Integration with GitHub Actions
This repository is configured to automatically run tests and generate coverage reports using GitHub Actions. Every time a commit is pushed or a pull request is created to the main branch, the tests will automatically execute in the CI pipeline. The results of the tests and coverage are displayed in the GitHub Actions console and uploaded to Coveralls for further tracking.
## Coverage Status
The test coverage for this repository is tracked using Coveralls. You can view the current test coverage status by checking the badge at the top of this README. It provides real-time feedback on the percentage of code covered by tests.
## License
Do not remove or modify the license file located in the source code folder. Removing this file may violate the terms and conditions of the software under testing.