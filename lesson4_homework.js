// const country_proprty = 'country';
// const property = 'new_';

// const person = {
//  name: 'Kirill',
//  age: 24,
//  address: {
//    [country_proprty]: 'Poland',
//    [property + 'city']: 'Warsaw',
//  },
// };

// //

// const name_property = 'last';
// const role_property = 'user';

// const employee = {
//  firstName: 'Ivan',
//  [name_property + 'Name']: 'Ivanov',
//  ['middle' + 'Name']: 'Ivanovich',
//  message: 'Hello world!',
//  permission: {
//    canEdit: true,
//    canDelete: false,
//    [role_property.toUpperCase()]: 'user',
//  },
// };

// console.log(employee);// ????

// count user object property (Object.keys() + length)

// let student = {
//   name: "John",
//   age: 20,
//   course: "Math",
// };

// let propertyCount = Object.keys(student).length;
// console.log(propertyCount); // 3

// get sum of score's numerical values

  //  let scores = {
  //   math: 90,
  //   english: 85,
  //   science: 92,
  //  };

  //  let totalScore = Object.values(scores).reduce((acc, element)=>{
  //   return acc+=element, 0});
  //  console.log(totalScore); // 267

//    Напишите функцию objectToArray(obj), которая принимает объект и возвращает массив массивов, где каждый подмассив содержит пару ключ-значение. (Object.entries())
// create a function objectToArray(obj), which takes an object and returns array of arrays, where each inner array has it's pair of prop-value

//    let obj = { a: 1, b: 2, c: 3 };
//    function objectToArray(obj) {
//     return Object.entries(obj)``
//    }
// console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]

// new Map + set + get 
  let students = new Map();
  students.set('Olya', 10);
  students.set('Nadya', 8);
  students.set('Ira', 3);
console.log(students.get('Olya'));

// 

// let products = new Map([
//     ['Milk', 1.2],
//     ['Bread', 1.5],
//     ['Cheese', 2.5],
//    ]);

//    //

//    console.log(products.has('Bread')); // false
// console.log(products); // Map(2) { 'Milk' => 1.2, 'Cheese' => 2.5 }

// //

// let fruits = new Set(['apple', 'banana', 'mango']);
// console.log(fruits.has('banana')); // false
// //

// const numbers = [1, 1, 4, 6, 7, 8, 9, 0, 0, 10, 10, 11]

// //

// console.log('result: ', result); //result:  [
//     //   1, 4,  6,  7, 8,
//     //   9, 0, 10, 11
//     // ]
