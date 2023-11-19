# JS-Jest
 Unit Test via Jest for presentation

 ## Step 1: Set Up
 1. Initial the package.json using below command on terminal:
 ```shell
 npm init-y
 ```
 2. Install the Jest library using below command on terminal:
 ```npm install --save-dev jest```
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

  3. Create a file call add.test.js to test the add.js function

  4. Run the Jest by using below command on terminal:
  ```shell
  npm test
  ```
  The result in terminal should like below if the test passed:
```
  > js-jest@1.0.0 test
> jest

 PASS  ./add.test.js
  ✓ adds 1 + 2 to equal 3 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.218 s
Ran all test suites.
```
## Step3: Export the Unit Test
*   Happy Path: refers to the normal, positive case scenario where the function is used as intended with valid inputs.
*   Unhappy Path: which cover negative, edge case, error, or invalid input scenarios.
*       s