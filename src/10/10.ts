export type UserType = {
    name: string,
    hair: number,
    address: {title: string},
}

export function makeHairstyle(user: UserType, power: number) {
    return {...user, hair: user.hair / power}
}

export function moveUser(user: UserType, newAddress: string) {
    return {...user, address: {...user.address, title: newAddress}}
}