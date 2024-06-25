// // push (выводит длину массива после добавления элемента в конец массива)

// let fruits = ['apple', 'banana', 'orange'];
// fruits.push('mango', 'pineapple');
// console.log(fruits); //все фрукты

// // pop (возвращает удаленный элемент, не принимает внутрь себя параметров)

// const users = [
//     {
//       id: 1,
//       name: 'Bob',
//       isStudent: true,
//     },
//     {
//       id: 2,
//       name: 'Alex',
//       isStudent: true,
//     },
//     {
//       id: 3,
//       name: 'Ann',
//       isStudent: true,
//     },
//     {
//       id: 4,
//       name: 'Donald',
//       isStudent: false,
//     },
//    ];

// const lastUser = users.pop();
// console.log(lastUser); // { id: 4, name: 'Donald', isStudent: false }
// console.log(users); // [ { id: 1, name: 'Bob', isStudent: true },  { id: 2, name: 'Alex', isStudent: true },{ id: 3, name: 'Ann', isStudent: true }]

// // shift

// const users = [
//     {
//       id: 1,
//       name: 'Bob',
//       isStudent: true,
//     },
//     {
//       id: 2,
//       name: 'Alex',
//       isStudent: true,
//     },
//     {
//       id: 3,
//       name: 'Ann',
//       isStudent: true,
//     },
//     {
//       id: 4,
//       name: 'Donald',
//       isStudent: false,
//     },
//    ];

// const firstUser = users.shift();
//    console.log(firstUser); // { id: 1, name: 'Bob', isStudent: true }
//    console.log(users); // [{ id: 2, name: 'Alex', isStudent: true },  { id: 3, name: 'Ann', isStudent: true },  { id: 4, name: 'Donald', isStudent: false }]

//    //unshift

//  const users = [
//   {
//     id: 1,
//     name: 'Bob',
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex',
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'Ann',
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: 'Donald',
//     isStudent: false,
//   },
//  ];

//  const unshiftedUser = users.unshift({id: 0, name: 'TestName', isStudent: false});
//  console.log(users); //[
//     { id: 0, name: 'TestName', isStudent: false },
//     { id: 1, name: 'Bob', isStudent: true },
//     { id: 2, name: 'Alex', isStudent: true },
//     { id: 3, name: 'Ann', isStudent: true },
//     { id: 4, name: 'Donald', isStudent: false }
//   ]

// // reverse, join, split

// const str = 'JavaScript is awesome';
// const res = str.split(' ').reverse().join(' ');
// console.log(res); // awesome is JavaScript

//concat():

// function mergeArrays(arr1, arr2) {
//   const merged = arr1.concat(arr2);
//   return merged;
// }

// const arr1 = ["orange", "kiwi"];
// const arr2 = ["apple", "banana"];

// console.log(mergeArrays(arr1, arr2));

// flat() избавляемся от вложенности

// function JavaScript (arr) {
//   return arr.flat(Infinity)
// }
// console.log(flattenArray([1, [2, 3], [[4], [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]

// find() находит элемент в массиве, принимает колбэк

// function findFirstElement (arr, condition) {
//   return arr.find(condition);
// }

// const numbers = [10, 20, 30, 40, 50];
// const fruits = ["apple", "banana", "orange", "kiwi"];

// let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);
// console.log(firstNumberGreaterThan25); // Output: 30

// let firstFruitStartingWithO = findFirstElement(fruits, (fruit) => fruit.startsWith('a'));
// console.log(firstFruitStartingWithO); // Output: "apple"

// inclides()

// function checkElement (arr, element) {
//   return arr.includes(element)
// }

// let numbers = [1, 2, 3, 4, 5];
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];

// console.log(checkElement(numbers, 3)); // Output: true // или checkElement(numbers, (num) => num === 3)
// console.log(checkElement(fruits, 'grape')); // Output: false // или checkElement(fruits, (fruit) => fruit === 'grape')

// filter

// function filterGreaterThan (arr, value) {
//   return arr.filter((num) => num > value);
// }
// let numbers1 = [10, 20, 30, 40, 50];
// let numbers2 = [5, 15, 25, 35, 45];

// console.log(filterGreaterThan(numbers1, 25)); // Output: [30, 40, 50]
// console.log(filterGreaterThan(numbers2, 20)); // Output: [25, 35, 45]

// sort()

// let people = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 },
//  ];

// function sortAlphabeticallyByProperty (arr, property) {
//   return  people.sort((a, b) => a[property].localeCompare(b[property]))
// };
//  console.log(sortAlphabeticallyByProperty(people, 'name')); // [ { name: 'Alice', age: 25 },{ name: 'Bob', age: 35 },{ name: 'John', age: 30 }]

//  let numbers = [5, 2, 8, 1, 4];

// function sortDescending(arr) {
//   return arr.sort((a, b) => b - a)
// };

//  console.log(sortDescending(numbers)); // Output: [8, 5, 4, 2, 1]

// map()

// let data = [
//   { value: 1, name: 'Option 1' },
//   { value: 2, name: 'Option 2' },
//   { value: 3, name: 'Option 3' },
// ];

// let formattedData = data.map((item) => {
//   return {
//     value: item.value,
//     label: item.name,
//   };
//  });

// console.log(formattedData); // [
  // { value: 1, label: 'Option 1' },
  // { value: 2, label: 'Option 2' },
  // { value: 3, label: 'Option 3' }
  // ]

  // isWordPalindrom? 

// function isWordPalindrom (word) {
//   const reverseWord = word.split('').reverse().join('');
//   if (word === reverseWord) {
//     return "it is a palindrom"
//   } else {
//     return "it is NOT a palindrom"
//   }
// }

// OR const reversedStr = str.split('').reverse().join('');
// return str === reversedStr;
// console.log(isWordPalindrom("шалаш"));

//найти повторяющиеся цифры. indexOf работает только с примитивами

// let arr = [1, 1, 5, 6, 7, 8, 9, 9, 3, 4, 0, 19];

// function removeDublicates(arr) {
//  let result = arr.filter((item, index) => {
//    return arr.indexOf(item) !== index;
//  });

//  return result;
// }

// console.log(removeDublicates(arr));//[ 1, 9 ]

function sortByProperty(arr, property) {
  return arr.sort((a, b) => a[property] - b[property]);
 }
 
 const persons = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
 ];
 
 console.log(sortByProperty(persons, 'age'));
 // [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]
 