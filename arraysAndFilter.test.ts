import { CourseType } from "./arraysAndFilter";

test("should take men older than 90", () => {
  const ages = [18, 20, 100, 90, 1];

  //const predicate = (age => age > 90);
  //const predicate = (age: number) => {return age > 90;

  const oldAges = ages.filter((age) => age > 90);

  expect(oldAges.length).toBe(1);
  expect(oldAges[0]).toBe(100);
});

test("should take men older than 90", () => {
  const courses = [
    { title: "JS", price: 150 },
    { title: "CSS", price: 220 },
    { title: "React", price: 110 },
  ];

  const cheapCourses = courses.filter((course) => course.price < 160);

  expect(cheapCourses.length).toBe(1);
  expect(cheapCourses[0].title).toBe("JS");
  expect(cheapCourses[1].title).toBe("React");
});

const productList = [
  { id: 1, title: "Bread", isDone: false },
  { id: 2, title: "Milk", isDone: true },
  { id: 3, title: "Solt", isDone: false },
  { id: 4, title: "Sugar", isDone: true },
];

const filteredProductList = productList.filter(p => !p.isDone); //все что после => - это возвращается

let a = productList[0].isDone; //false
let b = !productList[1].isDone; //true

expect(filteredProductList.length).toBe(2);
expect(filteredProductList[0].id).toBe(1);
expect(filteredProductList[1].id).toBe(3);