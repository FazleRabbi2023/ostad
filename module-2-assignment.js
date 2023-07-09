//example 1
//Assignment 1 (Module 2)
//Exercise 1: 

//Write a function named destructureExample that takes in an object and an array as parameters. 
//The function should use destructuring to extract the values 'name' and 'age' from the object 
//and the values at index 0 and index 2 from the array. The function should then return an object 
//with the extracted values as properties with name and age.

function destructureExample(obj, arr) {
  const { name, age } = obj;
  const [i1,,i2] = arr;

  return { name, age, i1, i2 };
}
const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];

console.log(destructureExample(obj, arr));

//Exercise 2:

//Write a function named sumNumbers that takes in multiple numbers 
//as arguments using the rest operator. The function should return
//the sum of all the numbers.

function sumNumbers(...values) {
    // alternative method // return num.reduce((x, num) => x + num, 5); //here initial value is 5 & x is summation variable
    let sum = 0;
  values.forEach(value => {
    sum += value;
  });
  return sum;
}

console.log(sumNumbers(1, 2, 3, 4, 5));


//Exercise 3:
//Write a function named createGreeting that takes in a name as a parameter and 
//returns a greeting message using template literals. The message should be in 
//the format: "Hello, [name]! Welcome to our website."

function createGreeting(name) {
  return `Hello, ${name}! Welcome to our website.` 
  //the advantage of using backtick (`) is, you can avoid (" ") and (+) to combine variable and text alltogether
}

console.log(createGreeting('Alice'))


//Exercise 4: 

//Write a function named isEven that takes in a number as a parameter and returns
//the string "Even" if the number is even, and "Odd" if the number is odd. Use a 
//ternary operator instead of an if/else statement.

const isEven = (number) => number%2==0?"Even":"Odd"

console.log(isEven(6))


//Exercise 5: 
//Convert the following function to an arrow function:

//function multiply(a, b) {
//  return a * b;
//}

const multiply = (a, b) => a * b 

console.log(multiply(3,4))

//Exercise 6: 
//Write a function named getLargestNumber that takes in two numbers as
//parameters. The function should return the larger number using 
//short-circuiting and logical operators (&&, ||, ??).

function getLargestNumber(a, b) {
  return a > b ? a : b;
}

console.log(getLargestNumber(10, 5))


///Exercise 7: 
//Write a function named getAddressCity that takes in an object representing a 
//person's address. The address object has properties 'street', 'city', and 'country'. 
//The function should return the value of the 'city' property if it exists, or the string 
//"Unknown" if it doesn't exist, using optional chaining.
  
function getAddressCity(address) {
  return address?.city ?? "Unknown";
}

const address = { street: '123 Main St', country: 'USA' };
console.log(getAddressCity(address))




