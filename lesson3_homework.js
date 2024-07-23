// slice

let str = 'Hello, world!';
let startIndex = 7;


console.log(getSubStr(str, startIndex)); // Выведет: "world!"

//

console.log(getLastElements([1, 2, 3, 4, 5], 3)); // Выведет: [3, 4, 5]

//

console.log(extractPath('https://example.com/blog/article', 18)); // Выведет: "/blog/article"

//

let numbers = [1, 2, 3, 4, 5];
console.log(removeElement(numbers, 2)); // Выведет: [1, 2, 4, 5]

//

let numbers = [1, 2, 4, 5];
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
   

