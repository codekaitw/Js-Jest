# JS-Jest
 Unit Test via Jest for presentation

 ## Step 1: Set Up
 1. Initial the package.json using below command on terminal:
 ```shell
 npm init-y
 ```
 2. Install the Jest library using below command on terminal:
 ```shell
 npm install --save-dev jest
 ```
 3. Check the Jest whether installed
 You should see the package.json have below content (in this case: version is 29.7.0)
 ```
 "devDependencies": {
    "jest": "^29.7.0"
 }
 ```
 4. In order to run the Jest, we need to change the test string which inside the scripts to "jest"
 ```
  "scripts": {
    "test": "jest"
 }
 ```
 ## Step 2: Write a function to test
 1. Create a file call add.js to write a function to test
 2. Write a first function call "add" to return a result of add two numbers and export the function
 3. Create a file call add.test.js to test the add.js function (import the add function)
 4. Run the Jest by using below command on terminal:
 ```shell
 npm test
 ```
 The result in terminal should like below if the test passed:
 ```  > js-jest@1.0.0 test
 > jest

 PASS  ./add.test.js
  ✓ adds 1 + 2 to equal 3 (2 ms)

  Test Suites: 1 passed, 1 total
  Tests:       1 passed, 1 total
  Snapshots:   0 total
  Time:        0.218 s
  Ran all test suites.
```
## Step 3: Export the Happy Path and Unhappy Paths
*   Happy Path: focuses on the ideal, expected scenario where everything goes as planned. This type of testing ensures that the software works as intended under normal conditions.
*   Unhappy Paths: refers to testing scenarios where things go wrong. This type of testing is designed to ensure that the software gracefully handles error conditions, invalid inputs, or unexpected user behavior.
1. In this case: add function, we need to think about unexpected scenarios of this function (In real word usually base on requirement).
    - Invalid Inputs: test inputs are valid
    - Edge Case: extremely large numbers, negative numbers
2.  Modify the add.test.js: We can use the **describe** function which used to group together related test cases within a test suite.
3. Run Jest after modify the add.test.js:
```shell
npm test
```
You should see the Tests: 1 failed, 7 passed, 8 total:
```
Tests:       1 failed, 7 passed, 8 total
```
Scroll up the test, you can see the failed message:
```
 ● add function tests › should return NaN when one of the inputs is a string

    expect(received).toBeNaN()

    Received: "1a"

      14 |     // using Jest to unhappy path test: Invalid Inputs
      15 |     test('should return NaN when one of the inputs is a string', () => {
    > 16 |         expect(add(1, 'a')).toBeNaN();
         |                             ^
      17 |         expect(add('a', 1)).toBeNaN();
      18 |     });
      19 |
```
4. Because JavaScript attempts to convert the number 1 to a string and then performs string concatenation. So, '1' + 'a' results in the string '1a'.
Test expect return NaN, not string, in this case we can modify the test or code, for the best practice, we should modify the code.
5. Run Jest again:
```shell
npm test
```
You should see all tests are passed.

## Step 4: Catch Error Test
1. Create a file call uppercase.js, write a function call uppercase which take one argument can convert a string to uppercase and if the argument is not string throw error. (export the function)
2. Create a test file call uppercase.test.js to test the functionality of uppercase function (import the uppercase function)
3. Run Jest:
```shell
npm test
```
4. Check the result: notice that the Test Suites is 2 passed now, because it tested two test group (**describe**).

## Step 5: Export Jest - Auto Test
1. In order to test automatically, we can modify the test string inside script (package.json):
```
"scripts": {
    "test": "jest --watchAll"
  },
```
2. Run Jest to start the auto test:
```shell
npm test
```
3. You should see the test is watching, when you saved/added/deleted the file.
```
Watch Usage: Press w to show more.
```