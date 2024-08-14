const country_proprty = 'country';
const property = 'new_';

const person = {
 name: 'Kirill',
 age: 24,
 address: {
   [country_proprty]: 'Poland',
   [property + 'city']: 'Warsaw',
 },
};

//

const name_property = 'last';
const role_property = 'user';

const employee = {
 firstName: 'Ivan',
 [name_property + 'Name']: 'Ivanov',
 ['middle' + 'Name']: 'Ivanovich',
 message: 'Hello world!',
 permission: {
   canEdit: true,
   canDelete: false,
   [role_property.toUpperCase()]: 'user',
 },
};

console.log(employee);// ????

//

let student = {
    name: 'John',
    age: 20,
    course: 'Math',
   };

   console.log(propertyCount); // 3

   //

   let scores = {
    math: 90,
    english: 85,
    science: 92,
   };

   
   console.log(totalScore); // 267

   //

   let obj = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]

//

console.log(studentGrades.get('Bob')); // 85

//

let products = new Map([
    ['Milk', 1.2],
    ['Bread', 1.5],
    ['Cheese', 2.5],
   ]);

   
   //

   console.log(products.has('Bread')); // false
console.log(products); // Map(2) { 'Milk' => 1.2, 'Cheese' => 2.5 }

//

let fruits = new Set(['apple', 'banana', 'mango']);
console.log(fruits.has('banana')); // false
//

const numbers = [1, 1, 4, 6, 7, 8, 9, 0, 0, 10, 10, 11]

//

console.log('result: ', result); //result:  [
    //   1, 4,  6,  7, 8,
    //   9, 0, 10, 11
    // ]
    
