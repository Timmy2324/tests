export type LocalCityType = {
    title: string,
    countryTitle: string,
}

export type AddressType = {
    streetTitle: string,
    city: LocalCityType,
}

export type TechType = {
    id: number,
    title: string,
}

export type StudentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType,
    technologies: Array<TechType>
}



const student: StudentType = {
    id: 1,
    name: 'Timur',
    age: 23,
    isActive: true,
    address: {
        streetTitle: 'Studencheskya 6',
        city: {
            title: 'Astrakhan',
            countryTitle: 'Russia',
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML',
        },
        {
            id: 2,
            title: 'CSS',
        },
        {
            id: 3,
            title: 'JS',
        },
    ]
}

export function a() {

}