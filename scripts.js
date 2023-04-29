let ages = [3,9,23,64,2,8,28,93];
//declaring array;

let firstElement = ages.shift();
//Remove and get the first element of the array;

let lastElement = ages.pop();
//Remove and get the last element of the array;

let result = lastElement - firstElement;
//Subtract first element from last element value;

console.log(result);
//print to console//90;

ages.push(10);
//adding the new age 10 to the end of th array;

let sum = 0;
//initializing a variable to keep track of the sum;
//of all elements in the array;

for (let i = 0; i < ages.length; i++){
  sum+=ages[i];  
} 
// looping through each element in array;
//adding the current element to the sum variable;

let averageAge = sum;
ages.length; // divided the sum of ages by the 
//length  of the array

console.log('Average age:', averageAge);
//This will print to the console agerage age//144;


/////////////////////////////////////////////////////
//Steps 2//

let names = ['Sam', 'Tommy', 'Tim', 'Sally','Buck', 'Bob'];
//create array with the following values;

let totalLetters = 0;
//initializing a variable to keep track of the total;

for (let i = 0; i < names.length; i++){
//looping through each name in the array;
totalLetters + names[i].length;
//adding the number of letters in the currant name to
//total.
}


let averageLetters = totalLetters / names.length;
//calculating the average by dividing the total number
//of letters by the length of the array.

console.log('Average number of letters per name:', averageLetters);
//printing the average number of letters per name to  
 //console;

let concatenatedNames = " ";
//this will concatenate the names;

for (let i = 0; i<names.length; i++){
  concatenatedNames += names[i] + " ";
}
//adding the current name and a space to the 
//concatenated string;

console.log('Concatenated names:',concatenatedNames.trim());

//this will get rid of any extra white space
//before the names and print to console;

///////////////////////////////////////////////////////
//Questions:

//Question 3. How do you access the last element
//of an array?  To access the last element in an
// array you would use the 'Array.length' property then 
//suntract '1' from the length to get the index of the 
//last element, and use the index to access the last
//element of the array.

//Question 4. How do you access the first element of
// any array? You can access the first element of an
//array by using index '0' of the array. You can get
//the first element of an array by using teh array name
//followed by the index number. 

////////////////////////////////////////////////////////
let namesLengths = [];
//declaring new array that we are going to 
//be pushing value of names into;

for (let i = 0; i < names.length; i++){ //loop over names
 namesLengths.push(names[i].length);
}
console.log(namesLengths);
//had to get the length of names to the nameLengths array
//using push (length); 
//And printed the length from names to namesLengths array.

let sumOf = 0;//define a new var , which will use to 
//keep track of the sum of elements in the 'namesLengths'

for (let i = 0; i < namesLengths.length; i++){
  sumOf += namesLengths[i];
}
console.log(sumOf);

//the above will itierate over the nameLengths array.
//For each element of the array, we add it to the 'sum'
//variable using the '+=' operator.

//console.log to print the value of sumOf=23.

function myFunction (word, n){
  let result = ""; //initialize empty string

  for (let i = 0; i < n; i++){
  result += word; 
  } //append the word to the end of the result string

return result; //Return result 
}
console.log(myFunction("hello ", 3));
//This will pass the word 'Hello' and the number
//three times.

function createFullName (firstName, lastName){
     console.log(firstName + ' '+ lastName);
}
createFullName('Jamie', 'Kessler');

//First I concatenated the first and last name with a 
//space between ' ' , and the store it in a variable 
//called fullName. Returned the concatenated full name
// and called the function.

const numbers = [20,30,40,50];
const results = isSumGreaterThan100(numbers);

function isSumGreaterThan100(numbers){
  let sum = 0; //initialize a variable to store;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum > 100;
}
console.log(results);
//add each value in the 'numbers' array to the sum variable
//return true if the sum of all numbers is greater
//after loop finishes, this line
//checks if the 'sums' var is greater than 100, and returns true if it is, or false if it is not.
//than 100, false otherwise.

const numberz = [2, 4, 6, 8,10];
const theResults = calculateAverage(numbers);

function calculateAverage(numbers){
  let sum = 0; //initialize a var called sum = 0;
  for(let i = 0; i< numbers.length; i++){
    sum += numbers[i];//loop through each number in the input array. Add current number to sum
  }
  const average = sum;
  numbers.length;//calculate average
  return average;//return average
}
console.log(theResults); //print to console.
 
////////////////////////////////////////////////

function isAvgFirstArrayGreaterThanSecond(firstArray,secondArray){
  let sumOfFirst=0;//initialize a var 
  for (let i = 0; i < firstArray.length; i++){
   sumOfFirst += firstArray[i];
   //Loop through each number in the first input array
   //add the current number to the sum of the first array
  }
  const avgOfFirst = sumOfFirst;
  firstArray.length; //calculate average of first array;

  let sumOfSecond = 0; //initialize new var
  for(let i =0; i<secondArray.length; i++){
    sumOfSecond += //loop through each number in second
    secondArray[i];//input array.
  }
  const avgOfSecond = sumOfSecond;
  secondArray.length;
  //calculate the average of the second array;
  return avgOfFirst > avgOfSecond;
  //return true if the average of the first array is 
  //greater than the average of the second array, false
  //otherwise.
}
//calculate the average of the second array
//Looped through each number in the first input array
//added the current number to the sum of array

//////////////////////////////////////////////////////
//12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


const isHotOutSide = true;
//declare and initialize as a boolean var to then 
//use in function below


 function willBuyDrink(isHotOutside, moneyInPocket){
  if (isHotOutSide && moneyInPocket > 10.50){
    return true;// if it isHotOutside & moneyInPocket is
  }else{        //greater than 10.50, return true;
    return false; //otherwise return false
  }
 }

 console.log(willBuyDrink(true,15));
//use function and call in argument to print to 
//console.


//////////////////////////////////////////////////////
//13. Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.

//Here's an example of how you can use the 
//'calculateSum()' function to calculate the sum of two 
//numbers.

function calculateSum(num1,num2){
  if (isNaN(num1) || isNaN(num2)){
    console.log('Please enter valid numbers.');
    return null;
  }
  const sum = num1 + num2;
  return sum;
}
const result1 = calculateSum(2,3);
const result2 = calculateSum(2,'a');

console.log(result1);
console.log(result2);

//here we first define the 'calculateSum()' function with
//the input parameters are valid numbers using the 'isNaN'
//() function. If neither of the parameters is not a 
//number, we display an error message using 'console.log'
//and return 'null'.

//Then I used the 'calculateSum' function twice with
//different input parameters. The first call passes
//in two valid numbers (2 and 3), which returns the 
//sum 5. THe second call passes in one valid number
//(2) and one invaid number ('a') which returns 'null'
//and logs an error message to the console.

//then I displayed the results of both calls to the
//'calculateSum()' function using 'console.log()'. week


