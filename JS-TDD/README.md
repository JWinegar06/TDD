# JavaScript TDD Practice with Vitest

This project demonstrates the basics of **Test-Driven Development (TDD)** using **Vitest**. Each feature was developed by writing tests first, then implementing the code until the tests passed.

---

## Project Structure

### `src/`

Contains the application logic (the functions being tested).

Files include:

* `calculator.js` – Adds two numbers.
* `password.js` – Checks if a password meets the required rules.
* `shopping.js` – Calculates the total cost of items in a shopping cart.
* `username.js` – Cleans and formats usernames.
* `register.js` – Demonstrates a username registration system using dependency injection.

---

### `tests/`

Contains all Vitest unit tests.

Each file matches a file in the `src` folder.

Examples include:

* `calculator.test.js`
* `password.test.js`
* `shopping.test.js`
* `username.test.js`
* `register.test.js`

Each test was written before the production code following the TDD process.

---

### `index.html`

Provides a simple web interface for interacting with each example.

Each section lets the user enter information and see the results produced by the functions in the `src` folder.

---

### `ui.js`

Connects the webpage to the application logic.

It imports functions from `src` and updates the webpage when buttons are clicked.

---

### `style.css`

Contains the styling for the webpage.

It organizes each example into easy-to-read cards and provides basic colors and spacing.

---

### `package.json`

Stores project information and dependencies.

It also contains the scripts used to run the application and the Vitest test suite.

---

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run all tests:

```bash
npm test
```

Run Vitest in watch mode:

```bash
npm run test:watch
```

---

## What is TDD?

Test-Driven Development (TDD) is a software development process where tests are written before the final program code. The basic cycle is called Red → Green → Refactor.

Red: Write a test for the behavior you want. The test should fail because the feature has not been created yet.
Green: Write the smallest amount of code needed to make the test pass.
Refactor: Improve the code while keeping all tests passing.

For example, if I want a function that determines whether a number is even, I would first write a test saying that isEven(4) should return true. The test initially fails because isEven() does not exist. I then create the function, make the test pass, and improve the code if necessary.

TDD helps developers catch bugs earlier, clearly define expected behavior, safely change existing code, and keep a permanent record of how different parts of the program are supposed to work.

---

## Features Included

* ✅ Addition Calculator
* ✅ Password Validator
* ✅ Shopping Cart Total Calculator
* ✅ Username Formatter
* ✅ Username Registration System (using mocks and dependency injection)

---

## Technologies Used

* JavaScript (ES Modules)
* Vitest
* Vite
* HTML
* CSS

---

## Purpose

This project was created to practice:

* Test-Driven Development (TDD)
* Unit testing with Vitest
* Writing reusable JavaScript functions
* Creating simple user interfaces that use tested code
* Organizing a JavaScript project using a clean folder structure
