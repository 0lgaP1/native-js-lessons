let people: Array<ManType> = [];

beforeEach ( () => {
    people = [
        { name: "Andrew Ivanov", age: 33 },
        { name: "Aleksandr Petrov", age: 24 },
        { name: "Dmitry Sidirov", age: 18 },
    ]
})

test("should get array of greeting messages", () => {
    const messages = people.map( man => `Hello ${man.name.split[0]}! Welcome to It-Incubator!`)

expect(messages.length).toBe(3);
expect(messages[0]).toBe(`Hello Andrew! Welcome to It-Incubator!`);
expect(messages[1]).toBe(`Hello Aleksandr! Welcome to It-Incubator!`);
expect(messages[2]).toBe(`Hello Dmitry! Welcome to It-Incubator!`);

})