interface Player {
    name: string,
    age: number,
    club: string,
    salary: number,
    wife?: string,
    previousClubs?: string[]
}

const messi: Player= {
    name: 'Messi',
    age: 24,
    club: 'PSG',
    salary: 213000,
    wife: 'Mrs. Messi',
    previousClubs: ['barcelona', 'rial madrid']
}

const hannan: Player = {
    name: 'hannan',
    age: 34,
    salary: 4464,
    club: 'abahoni',
}

interface info{
    name: string,
    age: number,
    designation: string,
}

interface Developer extends info {
    language: string,
    codeEditor: string,
    salary: number,
    favouriteThing: string
}

const aal: Developer = {
    language: 'js',
    codeEditor: 'vs code',
    salary: 2300,
    favouriteThing: 'playing games',
    name: 'aal emraan',
    age: 23,
    designation: 'ceo'
}