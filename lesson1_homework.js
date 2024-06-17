// 1

const a = {};
const b = {};
const c = a;
const d = c;

console.log(a === b);
console.log(a === c);
console.log(c === d);
console.log(a === c);

// 2

const a = {};
const b = a;
b['test'] = 'test value';

console.log(b === a);
console.log(a);

// 3

const user = {
    name: 'John',
    address: {
      city: 'New York',
      country: 'USA',
    },
   };
   
   console.log(updatedUser);

// 4 

