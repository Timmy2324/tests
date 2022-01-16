import {UsersType} from "./08";

let users: UsersType;

beforeEach(() => {
    users = {
        '1': {id: 1, name: 'Tim'},
        '12': {id: 12, name: 'Nastya'},
        '13': {id: 13, name: 'Gena'},
        '14': {id: 14, name: 'Chebyrashka'},
    }
})

test('Update user', () => {

    users['1'].name = 'Timur'

    expect(users['1'].name).toBe('Timur')
    expect(users['1']).toEqual({id: 1, name: 'Timur'})
})