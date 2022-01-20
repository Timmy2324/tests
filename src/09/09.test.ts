type UserType = {
    name: string,
    age: number,
}

function incAge(user: UserType) {
    user.age++;
}


test('user', () => {
    const user = {
        name: 'Tim',
        age: 23,
    }

    incAge(user);

    expect(user.age).toBe(24);
})

test('array user', () => {
    let users = [
        {
            name: 'Tim',
            age: 23,
        },
        {
            name: 'Nastya',
            age: 21,
        }
    ]

    const admin = users;

    admin.push({
        name: 'Gena',
        age: 22,
    })


    expect(users.length).toBe(3);
    expect(users[2]).toEqual({
        name: 'Gena',
        age: 22,
    });
})