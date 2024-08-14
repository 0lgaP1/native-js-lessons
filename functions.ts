import { student } from "./objects";
import { StudentType } from "./objects";
//callbacks' are declared with callback function
export const sum = (a: number, b: number)=> {
    return a + b;
}
//components are declared with function declaration
export function sum2(a: number, b: number) {
    return a + b;
}

const result = sum(sum(1,2), sum(2,3)) //функция часто принимает в качестве параметров не примитивы, а объекты

export const addTechnol = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addTechnol2 (student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}