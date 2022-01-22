import {makeHairstyle, moveUser, UserType} from "./10/10";

test('reference type test', () => {
    let user: UserType = {
        name: 'Tim',
        hair: 32,
        address: {
            title: 'Astrakhan'
        }
    }

    const awesomeUser = makeHairstyle(user, 2);

    expect(user.hair).toBe(32);
    expect(awesomeUser.hair).toBe(16);
    expect(awesomeUser.address).toBe(user.address);
})

test('reference type test', () => {
    let user: UserType = {
        name: 'Tim',
        hair: 32,
        address: {
            title: 'Astrakhan'
        }
    }

    const movedUser = moveUser(user, 'Moscow');

    expect(movedUser.address.title).toBe('Moscow');
    expect(movedUser.address.title).not.toBe(user.address.title);
})