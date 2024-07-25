// SLICE

let str = 'Hello, world!';
let startIndex = 7;

function getSubStr(str, startIndex) {
    return str.slice(startIndex);
}
console.log(getSubStr(str, startIndex)); // Выведет: "world!"

// function returns tha last n array elements  (-n)

function getLastElements (array, n) {
    return array.slice(-n)
}
console.log(getLastElements([1, 2, 3, 4, 5], 3)); // Выведет: [3, 4, 5]

// cut the URL path

function extractPath (string, n) {
    return string.slice(n)
}
console.log(extractPath('https://example.com/blog/article', 18)); // Выведет: "/blog/article"

// SPLICE (returns the array itself)
let numbersArray = [1, 2, 3, 4, 5];
function removeElement (numbersArray, index) {
    numbersArray.splice(index, 1);
    return numbersArray;
}

console.log(removeElement(numbersArray, 2)); // Выведет: [1, 2, 4, 5]

// delete and insert elements

let numbers2 = [1, 2, 4, 5];
function insertElement (numbers2, index, newElem) {
    numbers2.splice(index, 0, newElem);
    return numbers2
}
console.log(insertElement(numbers, 2, 3)); // Выведет: [1, 2, 3, 4, 5]

// reduce

let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Выведет: 15

//

console.log(sumStringLengths(['apple', 'banana', 'cherry'])); // Выведет: 17


//

console.log(sumNestedArrays([[1, 2], [3, 4, 5], [6, 7, 8, 9],]))

//

const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
console.log(removeDuplicates(numbers)); // Выведет: [1, 2, 3, 4, 5, 6]

//

const array = [1, 2, 3, 2, 4, 5, 4, 5];
const duplicatesArray = findDuplicates(array);
console.log(duplicatesArray); // Output: [2, 4, 5]

//

const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];

console.log(wordCount); // Output: { apple: 3, banana: 2, cherry: 1 }

//

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
   ];
   
   const names = getPropertyValues(people, 'name');
   console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
   

