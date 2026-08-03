# Unit Testing Notes

## TDD
TDD, or Test-Driven Development, is a development process where tests are written before the implementation code. Developers follow the Red, Green, Refactor cycle:

Red: Write a test for the behavior you want. The test should fail because the feature has not been created yet.
Green: Write the smallest amount of code needed to make the test pass.
Refactor: Improve the code while keeping all tests passing.

In Node.js, Mocha can be used to organize and execute tests, Chai can provide readable assertions that compare expected and actual results, and Istanbul/NYC can measure code coverage. Together, these tools help developers verify program behavior, identify untested code, prevent regressions, and safely improve their applications.

## Mocha
Mocha is a JavaScript testing framework.

Important commands:

npm test

or

npx mocha

Important syntax:

describe()
it()

## Chai
Chai is an assertion library.

Examples:

expect(result).to.equal(5);

expect(name).to.be.a("string");

expect(array).to.include("apple");

## NYC / Istanbul
Istanbul measures code coverage.
NYC is the command-line interface commonly used with Istanbul.

Run:

npx nyc mocha

Important coverage categories:

Statements
Branches
Functions
Lines