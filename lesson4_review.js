// Глубоко скопируйте объект superUser и измените в копии lat на ‘test coordinate’, при этом исходный объект должен оставаться неизменным. Реализуйте глубокое копирование 2-мя способами: через spread оператор и через structuredClone()

// const superUser = {
//   id: 10,
//   name: "Clementina DuBuque",
//   username: "Moriah.Stanton",
//   email: "Rey.Padberg@karina.biz",
//   address: {
//     street: "Kattie Turnpike",
//     suite: "Suite 198",
//     city: "Lebsackbury",
//     zipcode: "31428-2261",
//     geo: {
//       lat: "-38.2386",
//       lng: "57.2232",
//     },
//   },
//   phone: "024-648-3804",
//   website: "ambrose.net",
//   company: {
//     name: "Hoeger LLC",
//     catchPhrase: "Centralized empowering task-force",
//     bs: "target end-to-end models",
//   },
// };

// let cloneSuperUser1 = {
//   ...superUser,
//   address: {
//     ...superUser.address,
//     geo: { ...superUser.address.geo, lat: "test value" },
//   },
//   company: {
//     ...superUser.company, name: "Test Value"
//   }
// };
// console.log(cloneSuperUser1);

// let cloneSuperUser2 = structuredClone(superUser);
// cloneSuperUser2.address.geo.lat = 'testing my value'
// console.log(cloneSuperUser2);

// Напишите функцию sumAndDifference, которая принимает два числа и возвращает объект с их суммой и разностью. Используйте деструктуризацию.

// function sumAndDifference (a, b) {
//  return {
//   sum: a+b,
//   difference: a-b,
//  }
// }
// console.log('Сумма:', sum); 
// console.log('Разность:', difference);

// Напишите функцию getPositiveNumbers, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа(use filter)

// const numbers = [-1, 2, -3, 4, -5, 6];
// function getPositiveNumbers (array) {
//   return array.filter(number=>number>0);
// }
// const positiveNumbers = getPositiveNumbers(numbers);
// console.log(positiveNumbers); // Вывод: [2, 4, 6]

// Напишите функцию mergeArrays, которая принимает несколько массивов и объединяет их в один массив (reduce, concat)

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// function mergeArrays (...arrays) {
//   return arrays.reduce((acc, arr)=> acc.concat(arr), [])
// } 
// const mergedArray = mergeArrays(arr1, arr2);
// console.log(mergedArray); // Вывод: [1, 2, 3, 4, 5, 6]

// Напишите функцию findString, которая принимает массив строк и строку для поиска, и возвращает true, если строка найдена в массиве, и false в противном случае(includes)

// const strings = ['apple', 'banana', 'orange'];
// function findString (array, str) {
//   return array.includes(str)
// }
// console.log(findString(strings, 'banana')); // Вывод: true
// console.log(findString(strings, 'grape')); // Вывод: false

// Напишите функцию sortByPropertyValue, которая принимает массив объектов и строку, представляющую название свойства объекта. Функция должна вернуть массив объектов, отсортированных по возрастанию значений указанного свойства (sort)

// const people = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 },
//    ];

//   function sortByProperty(objects, property) {
//     return objects.sort((a, b) => a[property] - b[property]);
//    }

//    sortByProperty(people, 'age');
//    console.log(people); // Вывод: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]

// Дан массив целых чисел. Напишите функцию extractSubarray, которая принимает этот массив и два индекса start и end. Функция должна вернуть новый массив, содержащий элементы исходного массива с индексами от start до end (не включая элемент с индексом end).После этого, исходный массив должен быть изменен, так что он больше не содержит извлеченные элементы(slice, splice)

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function extractSubarray (arr, start, end) {
//   const extracted = arr.slice(start, end);
//   return arr.splice(start, extracted.length)
// }
// let extracted = extractSubarray(array, 2, 6);

// console.log(extracted); // Вывод: [3, 4, 5, 6]
// console.log(array); // Вывод: [1, 2, 7, 8, 9]

// Напишите функцию addPropertyToObject, которая добавляет новое свойство к объекту с указанным именем и значением (use dynamic property for that)

// let obj = { name: 'Alice' };
// function addPropertyToObject (object, key, property) {
//   return object[key]= property
// }
// addPropertyToObject(obj, 'age', 30);
// console.log(obj); // Вывод: { name: "Alice", age: 30 }

// У вас есть объект, представляющий информацию о студентах и их оценках. Напишите функцию, которая принимает этот объект и возвращает массив строк, каждая из которых представляет собой имя студента, за которым следует строка с его оценками в формате "Имя: Оценки"(Object.entries() + map)

// const students = {
// Alice: [4, 5, 3],
// Bob: [3, 2, 4],
// Charlie: [5, 5, 5]
// };
//   function formatStudentGrades (obj) {
//     return Object.entries(obj).map(([name, grades])=>`${name}`+' : '+`${grades.join(',')}`)
//   }
// console.log(formatStudentGrades(students));

// Вывод:
// [
//   "Alice: 4, 5, 3",
//   "Bob: 3, 2, 4",
//   "Charlie: 5, 5, 5"
// ]

// У вас есть объект, представляющий информацию о студентах и их оценках. Напишите функцию, которая принимает этот объект и возвращает массив имен студентов (Object,keys())

// const students = {
//     Alice: [4, 5, 3],
//     Bob: [3, 2, 4],
//     Charlie: [5, 5, 5]
//    };
//    function getStudentNames (obj) {
//     return Object.keys(obj)
//    }
//    console.log(getStudentNames(students));
   // Вывод: ["Alice", "Bob", "Charlie"]

//  У вас есть объект, представляющий информацию о книгах в библиотеке. Каждая книга имеет свойство genre, представляющее жанр книги. Напишите функцию, которая принимает этот объект и возвращает массив уникальных жанров книг (new Set, Object.values(), map)

//    const library = {
//     'The Great Gatsby': { genre: 'Fiction' },
//     'To Kill a Mockingbird': { genre: 'Fiction' },
//     1984: { genre: 'Science Fiction' },
//    'Pride and Prejudice': { genre: 'Romance' },
//    'The Catcher in the Rye': { genre: 'Fiction' },
//   };
// function getUniqueGenres (obj) {
//     const genres = new Set (Object.values(obj).map((item)=>item.genre))
//     return [...genres]
// }
//   console.log(getUniqueGenres(library));
  // Вывод: ["Fiction", "Science Fiction", "Romance"]

// У вас есть массив пар ключ-значение. Напишите функцию, которая принимает этот массив и возвращает новый объект Map с этими парами.

// const pairs = [
//     ['a', 1],
//     ['b', 2],
//     ['c', 3],
//    ];

//    function createMapFromArray (arr) {
//     return new Map (arr)
//    }
//    console.log(createMapFromArray(pairs));
   // Вывод: Map { 'a' => 1, 'b' => 2, 'c' => 3 }

