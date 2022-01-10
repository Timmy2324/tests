export type ManType = {
    name: string,
    age: number,
}

const people: ManType[] = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alex Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
];

const transformator = (man: ManType) => {
    return {
        stack: ['html', 'css', 'js', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    }
}

const devs = [
    {
        stack: ['html', 'css', 'js', 'react'],
        firstName: 'Andrew', lastName: 'Ivanov',
    },
    {
        stack: ['html', 'css', 'js', 'react'],
        firstName: 'Alex', lastName: 'Petrov',
    },
    {
        stack: ['html', 'css', 'js', 'react'],
        firstName: 'Dmitry', lastName: 'Sidorov',
    },
];

const devs2 = [
    transformator(people[0]),
    transformator(people[1]),
    transformator(people[2]),
];

const devs3 = people.map(man => transformator(man));

const devs4 = people.map(man => {
    return {
        stack: ['html', 'css', 'js', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    }
});

const messages = people.map(man => 'hell0 ' + man.name.split(' ')[0]);

export const createGreetingsMessage = (people: ManType[]) => {
    return people.map(man => 'hell0 ' + man.name.split(' ')[0])
}