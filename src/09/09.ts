let user = {
    name: 'Tim',
    age: 23,
}

type UserType1 = {
    name: string,
    age: number,
}

function incAge1(user: UserType1) {
    user.age++;
}