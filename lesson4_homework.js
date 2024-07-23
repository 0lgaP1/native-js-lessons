//

const superUser = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
   };

   // sumAndDifference

   console.log('Сумма:', sum); // Вывод: 15
console.log('Разность:', difference); // Вывод: 5

// getPositiveNumbers

const numbers = [-1, 2, -3, 4, -5, 6];
const positiveNumbers = getPositiveNumbers(numbers);
console.log(positiveNumbers); // Вывод: [2, 4, 6]

// mergeArrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = mergeArrays(arr1, arr2);
console.log(mergedArray); // Вывод: [1, 2, 3, 4, 5, 6]

// findString

const strings = ['apple', 'banana', 'orange'];
console.log(findString(strings, 'banana')); // Вывод: true
console.log(findString(strings, 'grape')); // Вывод: false

// sortByPropertyValue

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
   ];
   sortByProperty(people, 'age');
   console.log(people); // Вывод: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]

// extractSubarray

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let extracted = extractSubarray(array, 2, 6);
console.log(extracted); // Вывод: [3, 4, 5, 6]
console.log(array); // Вывод: [1, 2, 7, 8, 9]

// addPropertyToObject

let obj = { name: 'Alice' };
addPropertyToObject(obj, 'age', 30);
console.log(obj); // Вывод: { name: "Alice", age: 30 }

// 


const students = {
Alice: [4, 5, 3],
Bob: [3, 2, 4],
Charlie: [5, 5, 5]
};

console.log(formatStudentGrades(students));
// Вывод:
// [
//   "Alice: 4, 5, 3",
//   "Bob: 3, 2, 4",
//   "Charlie: 5, 5, 5"
// ]

// 10

const students = {
    Alice: [4, 5, 3],
    Bob: [3, 2, 4],
    Charlie: [5, 5, 5]
   };
   
   console.log(getStudentNames(students));
   // Вывод: ["Alice", "Bob", "Charlie"]

   //11 

   const library = {
    'The Great Gatsby': { genre: 'Fiction' },
    'To Kill a Mockingbird': { genre: 'Fiction' },
    1984: { genre: 'Science Fiction' },
   'Pride and Prejudice': { genre: 'Romance' },
   'The Catcher in the Rye': { genre: 'Fiction' },
  };
  
  console.log(getUniqueGenres(library));
  // Вывод: ["Fiction", "Science Fiction", "Romance"]
  

//12

const pairs = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
   ];
   console.log(createMapFromArray(pairs));
   // Вывод: Map { 'a' => 1, 'b' => 2, 'c' => 3 }

// objectToArray(obj) 

let obj = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]

// map+set+get

// new map, has, delete

// 


