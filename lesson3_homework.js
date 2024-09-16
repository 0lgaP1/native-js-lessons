// SLICE

let str = "Hello, world!";
let startIndex = 7;

function getSubStr(str, startIndex) {
  return str.slice(startIndex);
}
console.log(getSubStr(str, startIndex)); // Выведет: "world!"

// function returns the last n array elements  (-n)

function getLastElements(array, n) {
  return array.slice(-n);
}
console.log(getLastElements([1, 2, 3, 4, 5], 3)); // Выведет: [3, 4, 5]

// cut the URL path

function extractPath(string, n) {
  return string.slice(n);
}
console.log(extractPath("https://example.com/blog/article", 18)); // Выведет: "/blog/article"

// SPLICE (returns the array itself)
let numbersArray = [1, 2, 3, 4, 5];
function removeElement(numbersArray, index) {
  numbersArray.splice(index, 1);
  return numbersArray;
}

console.log(removeElement(numbersArray, 2)); // Выведет: [1, 2, 4, 5]

// delete and insert elements

let numbers2 = [1, 2, 4, 5];
function insertElement(numbers2, index, newElem) {
  numbers2.splice(index, 0, newElem);
  return numbers2;
}
console.log(insertElement(numbers, 2, 3)); // Выведет: [1, 2, 3, 4, 5]

// reduce

let numbers3 = [1, 2, 3, 4, 5];
let sumArray = numbers3.reduce((acc, currentNumb) => {
  return acc + currentNumb;
}, 0);
console.log(sumArray); // Выведет: 15

// OR
function sumArray2(arr) {
  return arr.reduce((accum, currentValue) => accum + currentValue, 0);
}
console.log(sumArray2(numbers3));

// sum of strings' length

function sumStringLengths(stringArr) {
  let lengths = stringArr.map((item) => item.length);
  return lengths.reduce((accum, currentValue) => accum + currentValue, 0);
}
console.log(sumStringLengths(["apple", "banana", "cherry"])); // Выведет: 17

// reduce arrays of number arrays

function sumNestedArrays(nestedArrays) {
  let flattedArrays = nestedArrays.flat();
  return flattedArrays.reduce((accum, currentValue) => accum + currentValue, 0);
}
console.log(
  sumNestedArrays([
    [1, 2],
    [3, 4, 5],
    [6, 7, 8, 9],
  ])
); //Output: 45

// console.log if the quantity of same numbers is 1

const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
function removeDuplicates(numbers) {
  return numbers.reduce((unique, num) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);
}
// Выведет: [1, 2, 3, 4, 5, 6]
// также можно воспользоваться объектом Set:
// function removeDuplicates2(numbers) {
//     return [...new Set(numbers)];
// }
console.log(removeDuplicates(numbers));
// find duplicates and return them

const array = [1, 2, 3, 2, 4, 5, 4, 5];
const duplicatesArray = findDuplicates(array);
function findDuplicates(array) {
  const seen = [];
  return array.reduce((duplicates, num) => {
    if (seen.includes(num)) {
      if (!duplicates.includes(num)) {
        duplicates.push(num);
      }
    } else {
      seen.push(num);
    }
    return duplicates;
  }, []);
}
console.log(duplicatesArray); // Output: [2, 4, 5]

//or option2 for the task above
// function findDuplicates(array) {
//     const seen = new Set();
//     return array.reduce((duplicates, num) => {
//         if (seen.has(num)) {
//             if (!duplicates.includes(num)) {
//                 duplicates.push(num);
//             }
//         } else {
//             seen.add(num);
//         }
//         return duplicates;
//     }, []);
// }

// the result should be an object that returns unique strings as keys and its' quantity as values

const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];
function wordCount(words) {
  return words.reduce((acc, item) => {
    if (acc[item]) {
      acc[item]++;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
}
console.log(wordCount); // Output: { apple: 3, banana: 2, cherry: 1 }

//

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

function getPropertyValues(arr, property) {
  return arr.reduce((result, obj) => {
    result.push(obj[property]);
    return result;
  }, []);
}
const names = getPropertyValues(people, "name");
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
