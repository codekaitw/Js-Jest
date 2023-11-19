# JS-Jest
 Unit Test via Jest for presentation

 ## Step 1: Set Up
 1. Initial the package.json
 ```npm init-y```
 2. Install the Jest library
 ```npm install --save-dev jest```
 3. Check the Jest whether installed
 You should see the package.json have below content (in this case: version is 29.7.0)
 "devDependencies": {
    "jest": "^29.7.0"
  }
  4. In order to run the Jest, we need to change the test string which inside the scripts to "jest"
  "scripts": {
    "test": "jest"
  }

  ## Step 2: Write functions to test
  1. create a file call calculator.js to write a function to test
