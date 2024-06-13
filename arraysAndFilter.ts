const ages = [18, 20, 100, 90, 1];
const predicate = (age: number) => {
  return age > 90;
};

const oldAges = [100];

const courses = [
  { title: "JS", price: 150 },
  { title: "CSS", price: 220 },
  { title: "React", price: 110 },
];

export type CourseType = {
  title: string;
  price: number;
};
const cheapPredicate = (course: CourseType) => {
  return course.price < 160;
};

const cheapCourses = [
  { title: "React", price: 110 },
  { title: "JS", price: 150 },
];
