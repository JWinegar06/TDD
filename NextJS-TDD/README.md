# Next.js Test-Driven Development Project

## Project Overview

This project is a Next.js application created to practice Test-Driven Development, also known as TDD.

The main goal of the project was to build common authentication features while writing tests before or alongside the implementation. The application includes signup, form validation, login, routing, client-side authentication state, and mocked API requests.

The project follows the TDD process:

1. Write a failing test.
2. Write the minimum code needed to make the test pass.
3. Refactor the code while keeping the tests passing.

This process is commonly referred to as:

**Red → Green → Refactor**

---

## Technologies Used

The project was built with:

* Next.js
* React
* TypeScript
* Vitest
* React Testing Library
* Testing Library User Event
* Jest DOM matchers
* jsdom

---

## Features Created

### Signup Form

The signup form allows a user to enter:

* Name
* Email address
* Password

The form validates the information before attempting to create an account.

Validation includes:

* Name is required.
* Email is required.
* Email must use a valid format.
* Password is required.
* Password must contain at least 8 characters.

The signup form is tested to make sure the fields render correctly, validation messages appear, and valid user information is passed to the signup function.

---

### Login Form

The login form allows a user to enter:

* Email address
* Password

The form checks that required information is present before calling the login function.

The login tests verify that:

* Email and password fields render.
* Missing information displays an error.
* Valid credentials are passed to the login function.
* Failed login attempts display an error message.

---

### Form Validation

Validation logic was separated from the React components into a utility file.

The validation functions include:

* `isValidEmail()`
* `isValidPassword()`
* `validateSignup()`

Separating validation logic makes it easier to test independently and reuse throughout the application.

Unit tests were created to verify valid and invalid email addresses, password length, empty fields, and valid signup information.

---

### Routing

Next.js App Router was used to create several routes.

The application includes:

* `/` — Home page
* `/signup` — Signup page
* `/login` — Login page
* `/dashboard` — User dashboard

After successful signup, the user can be redirected to the login page.

After successful login, the user can be redirected to the dashboard.

---

### Client-Side Authentication State

React Context was used to manage authentication state on the client side.

The `AuthContext` stores the currently logged-in user and provides functions for:

* Logging in
* Logging out
* Accessing the current user

The dashboard uses this state to determine whether a user is logged in.

---

### Authentication Service

Authentication-related API requests were moved into a separate service file.

The service includes:

* `signupUser()`
* `loginUser()`

These functions use `fetch()` to send requests to authentication endpoints.

Separating API logic from React components makes the components easier to test and maintain.

---

## Mocking External Dependencies

One of the main goals of the assignment was learning how to mock external dependencies.

The project uses Vitest to mock functions and API requests.

For example, `vi.fn()` is used to create mock signup and login functions.

The project's authentication service tests also mock `fetch()` using `vi.spyOn()`.

This allows API behavior to be tested without contacting a real server.

Tests can simulate:

* Successful signup requests
* Successful login requests
* Failed login attempts
* Failed API responses

Mocking allows the tests to remain fast and predictable.

---

## Testing

The project contains several types of tests.

### Validation Tests

`validation.test.ts`

These tests verify the application's validation functions independently from the React components.

---

### Signup Component Tests

`SignupForm.test.tsx`

These tests verify:

* Signup form rendering
* Required field validation
* Email validation
* Submission of valid information
* Mocked signup behavior

---

### Login Component Tests

`LoginForm.test.tsx`

These tests verify:

* Login form rendering
* Required field errors
* Successful login submissions
* Failed login attempts

---

### Authentication Service Tests

`authService.test.ts`

These tests verify API-related behavior using mocked `fetch()` requests.

This prevents the tests from depending on a real backend server.

---

## Test-Driven Development Process

The project was developed using the Red, Green, Refactor process.

### Red

A test was written describing the expected behavior.

The test was run before the feature existed, causing it to fail.

Example:

A test expected the message:

`Email is required`

when the signup form was submitted without an email address.

---

### Green

The minimum amount of code needed to satisfy the test was created.

The tests were run again until the new test passed.

---

### Refactor

After the test passed, the implementation could be cleaned up or reorganized.

The test suite was run again after refactoring to confirm that existing functionality still worked.

This makes it safer to modify the application because tests can immediately identify broken behavior.

---

## Project Structure

```text
nextjs-tdd/
│
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   │
│   ├── context/
│   │   └── AuthContext.tsx
│   │
│   ├── services/
│   │   └── authService.ts
│   │
│   └── utils/
│       └── validation.ts
│
├── tests/
│   ├── LoginForm.test.tsx
│   ├── SignupForm.test.tsx
│   ├── authService.test.ts
│   └── validation.test.ts
│
├── test/
│   └── setup.ts
│
├── vitest.config.ts
├── package.json
└── README.md
```

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

The application can then be opened at:

```text
http://localhost:3000
```

---

## Running the Tests

Run Vitest in watch mode:

```bash
npm test
```

Run all tests once:

```bash
npm run test:run
```

A successful test run confirms that the tested features are working as expected.

---

## Building the Application

To verify that the Next.js application builds successfully, run:

```bash
npm run build
```

This checks for TypeScript errors, build errors, and other issues that could prevent the application from being deployed.

---

## What I Learned

This project helped demonstrate how Test-Driven Development can be used with React and Next.js.

The project provided practice with:

* Writing tests before implementing features
* Testing React components
* Testing user interactions
* Testing validation functions
* Mocking functions with Vitest
* Mocking API requests
* Separating business logic from components
* Managing client-side authentication state
* Creating routes with Next.js
* Refactoring code with confidence

One of the main benefits of TDD is that tests provide confidence when making changes. If part of the signup, login, validation, or authentication code is changed later, the test suite can be run to quickly determine whether existing functionality was accidentally broken.

---

## Conclusion

The completed application demonstrates the major concepts covered by the assignment, including signup, validation, routing, login, client-side state management, API requests, dependency mocking, and React testing.

Using Test-Driven Development throughout the project helped break the application into smaller, testable pieces and provided a reliable way to verify behavior during development and refactoring.
