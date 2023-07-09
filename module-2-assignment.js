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


