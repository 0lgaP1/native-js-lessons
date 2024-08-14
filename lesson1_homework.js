// 1

// const a = {};
// const b = {};
// const c = a;
// const d = c;

// console.log(a === b); false
// console.log(a === c); true
// console.log(c === d); true
// console.log(a === c); true

// 2

// const a = {};
// const b = a;
// b['test'] = 'test value';

// console.log(b === a);
// console.log(a);

// 3

const user = {
  name: "John",
  address: {
    city: "New York",
    country: "USA",
  },
};

const newUserAddress = {
  ...user,
  address: { ...user.address, city: "Berlin", country: "Germany" },
};
console.log(newUserAddress);

// 4

const originalArray = [1, 2, 3, 4, 5];
const newArray = addElementToArray(originalArray, 6);
function addElementToArray (array, element) {
    return [...array, element];
}
console.log(newArray);

//5 Desrtucturization

// const user2 = { name: 'John', age: 25, city: 'New York' };
// const {name, age, city} = user2;

// console.log(name);  // 'John'
// console.log(age);   // 25
// console.log(city);  // 'New York'

// 6

const fruits = ['apple', 'banana', 'orange'];
const [, [secondFruit], [thirdFruit]] = fruits;
console.log(secondFruit);  // 'banana'
console.log(thirdFruit);   // 'orange'

// 7

const person = { name: 'Alice', age: 30 };
function printPersonDetails({name, age}) {
 console.log(`Name: ${name}, Age: ${age}`);
}
printPersonDetails(person);  // Вывод: Name: Alice, Age: 30

// 8

const car = { brand: 'Toyota', model: 'Camry' };
const { brand, model, year = '2022'} = car;
console.log(brand);  // 'Toyota'
console.log(model);  // 'Camry'
console.log(year); // '2022'

// 9

const students = [
    { name: 'Alex', grade: 'A' },
    { name: 'Emma', grade: 'B' },
    { name: 'Chris', grade: 'C' },
   ];

const [{ name: student1 }, , { name: student3 }] = students;

console.log(student1);  // 'Alex'
console.log(student3);  // 'Chris'

// 10 

const person2 = { firstName: 'Max', lastName: 'Johnson' };
const firstName = 'first Name: Nina';
const lastName = 'last Name: Ivanov';
const { firstName: nameVariable, lastName: lastNameVariable, age = 25 } = person;

console.log(nameVariable); // 'Max'
console.log(lastNameVariable); // 'Johnson'
console.log(age); // 25 (значение по умолчанию)
