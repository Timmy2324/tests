


test('test', () => {
    let man = {
        name: 'Kek',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}]
    }

    const {age, lessons} = man;

    // const age1 = man.age;
    // const lessons1 = man.lessons;

    expect(age).toBe(32);
    expect(lessons.length).toBe(2);

});

