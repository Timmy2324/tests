export const sentence: string = 'Hello my friends';

export function sum(a: number, b: number) {
    return a + b;
}

export function mult(a: number, b: number) {
    return a * b;
}


export function sentIntoWords(sentence: string) {
    return sentence.toLocaleLowerCase().split(' ')
        .filter(w => w !== '' && w !== '-')
        .map(w => w
            .replace('!', '')
            .replace(',', '')
            .replace('.', ''));
}