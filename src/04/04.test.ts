import { CourseType } from "./04";

export const a = 1;

test('should tale old med older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const predicate = (age: number) => {
        return age > 90;
    }

    const oldAges = ages.filter((age: number) => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('should tale courses chipper 160', () => {
    const courses: Array<CourseType> = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ];

    const chipPredicate = (course: CourseType) => {
        return course.price < 160;
    }

    const chipCourses = courses.filter((course: CourseType) => course.price < 160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('CSS');
    expect(chipCourses[1].title).toBe('REACT');
})

test('get only completed tasks', () => {
   const task = [
       {id: 1, title: 'Bread', isDone: false},
       {id: 2, title: 'Milk', isDone: true},
       {id: 3, title: 'Solt', isDone: false},
       {id: 4, title: 'Sugar', isDone: true},
   ];

   const completedTask = task.filter((task) => task.isDone);

   expect(completedTask.length).toBe(2);
   expect(completedTask[0].title).toBe('Milk');
   expect(completedTask[1].title).toBe('Sugar');

});

test('get only uncompleted tasks', () => {
    const task = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ];

    const uncompletedTask = task.filter((task) => !task.isDone);

    expect(uncompletedTask.length).toBe(2);
    expect(uncompletedTask[0].title).toBe('Bread');
    expect(uncompletedTask[1].title).toBe('Solt');

});