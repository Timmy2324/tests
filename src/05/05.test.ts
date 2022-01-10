import {createGreetingsMessage, ManType} from "./05";

let people: ManType[];

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alex Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18},
    ];
})

test('should get array messages', () => {
    const messages = createGreetingsMessage(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('hell0 Andrew');
    expect(messages[1]).toBe('hell0 Alex');
    expect(messages[2]).toBe('hell0 Dmitry');
})