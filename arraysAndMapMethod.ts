export type ManType = {
  name: string;
  age: number;
};

const people: Array<ManType> = [
  { name: "Andrew Ivanov", age: 33 },
  { name: "Aleksandr Petrov", age: 24 },
  { name: "Dmitry Sidirov", age: 18 },
];

const messages = people.map(
  (man) => `Hello ${man.name.split("")[0]}! Welocme to It-incubator`
);
