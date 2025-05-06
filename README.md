# Todo App Test Suite

This project contains automated tests for the Todo App using [Playwright](https://playwright.dev/). It is designed to work with **Node.js version 16 or higher** (developed with Node.js 22).

## Prerequisites

- **Node.js**: Ensure you have Node.js version 16 or higher installed. You can check your Node.js version by running:
  ```bash
  node -v
  ```
  If you need to install or update Node.js, visit [Node.js Downloads](https://nodejs.org/).

- **Git**: Ensure Git is installed to clone the repository.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shayo91/todo-app.git
   cd todo-app
   ```

2. **Install Dependencies**:
   Run the following command to install all required dependencies:
   ```bash
   npm install
   ```

3. **Install Playwright Browsers**:
   After installing dependencies, you need to install the required Playwright browsers by running:
   ```bash
   npx playwright install chromium
   ```
   This command downloads the necessary browser binaries (e.g., Chromium in this case) required to run the tests.

## Scripts

The following scripts are defined in the `package.json` file:

- **Run Tests in Headed Mode**:
  ```bash
  npm run test
  ```
  This command runs all the Playwright tests in **headed mode**, which means the browser will be visible during the test execution.

- **Run Tests in Headless Mode**:
  ```bash
  npm run test:headless
  ```
  This command runs all the Playwright tests in **headless mode**, which means the browser will run in the background without a visible UI.

- **Run Tests and Show Report**:
  ```bash
  npm run test:report
  ```
  This command runs all the Playwright tests in **headed mode** and then opens the test report in your default browser after the tests complete.

## Test Reporting

After running the tests with `npm run test:report`, a detailed HTML report will be generated. This report provides insights into:
- Passed, failed, and skipped tests.
- Screenshots and logs for failed tests (if configured in Playwright).

To manually view the report after running tests, you can use:
```bash
npx playwright show-report
```

## Notes

- Ensure your Node.js version is compatible (16 or higher).
- If you encounter any issues, check the Playwright documentation or raise an issue in the repository.

## License

This project is licensed under the ISC License.
