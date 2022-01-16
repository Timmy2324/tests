export type UsersType = {
    [key: string]: {id: number, name: string}
}

export const usersObj = {
    '0': 'Tim',
    '1': 'Nastya',
    '2': 'Gena',
    '3': 'Chebyrashka',
}

export const users: UsersType = {
    '1': {id: 1, name: 'Tim'},
    '12': {id: 12, name: 'Nastya'},
    '13': {id: 13, name: 'Gena'},
    '14': {id: 14, name: 'Chebyrashka'},
}

export const usersArray = [
    {id: 1, name: 'Tim'},
    {id: 12, name: 'Nastya'},
    {id: 13, name: 'Gena'},
    {id: 14, name: 'Chebyrashka'},
]

const userVasya = {id: 21, name: 'Vasya'}

users[userVasya.id.toString()] = userVasya
delete users[userVasya.id.toString()]