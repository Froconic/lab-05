'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) {
  var calculateSum = a + b;
  var sumMsg = 'The sum of ' + a + ' and ' +  b + ' is ' + calculateSum + '.';
  return [calculateSum, sumMsg];
}

// console.log(sum(4, 7));
// console.log(sum(1000, 9000000));

// Here is the test for sum(); uncomment it to run it
// testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
  var answer = (a * b);
  var message = ((('The product of ' + a + ' and ' + b) + ' ' + answer));
  return [answer, message];

}

// Here is the test for multiply(); uncomment it to run it
// console.log(multiply(5, 9));

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
  var final = [];
  var sum1 = sum(a, b);
  // console.log(sum1);
  sum1 = parseInt(sum1, 10);
  // console.log(sum1);

  var sum2 = sum(sum1, c);
  // console.log(sum2);
  sum2 = parseInt(sum2);

  final.push(sum2);
  // console.log(final);

  var multi1 = multiply(a, b);
  // console.log(multi1);
  multi1 = parseInt(multi1, 10);
  // console.log(multi1);

  var multi2 = multiply(multi1, c);
  // console.log(multi2);
  multi2 = parseInt(multi2);

  final.push(multi2);
  // console.log(final);

  var msg1 = 'The sum of ' + a + ' and ' + b + ' and ' + c + ' is ' + sum2;
  // console.log(msg1);
  var msg2 = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + multi2;
  // console.log(msg2);

  final.push(msg1);
  final.push(msg2);
  // console.log(final);
  return final;
}

// Here is the test for sumAndMultiply(); uncomment it to run it
// console.log(sumAndMultiply(4, 7, 5));

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
  var sum3 = 0;
  var array1 = [];
  for (var i = 0; i < sumArr.length; i++) {
    var temp = sumArr[i];
    sum3 = sum(temp, sum3);
    // console.log(sum3);
    sum3 = parseInt(sum3);
    // console.log(sum3);
  }

  var msg3 = '2,3,4 was passed in as an array of numbers, and 9 is their sum';
  array1.push(sum3);
  array1.push(msg3);
  // console.log(array1);
  return array1;
}

// Here is the test for sumArray(); uncomment it to run it

// sumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
  var multi3 = 1;
  var array2 = [];
  for (var i = 0; i < multArr.length; i++) {
    var temp2 = multArr[i];
    multi3 = multiply(temp2, multi3);
    console.log(parseInt(multi3));
    multi3 = parseInt(multi3);
  }

  var msg4 = 'The numbers 2,3,4 have a product of 24';
  array2.push(multi3);
  array2.push(msg4);
  console.log(array2);
}

// Here is the test for multiplyArray(); uncomment it to run it
multiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
