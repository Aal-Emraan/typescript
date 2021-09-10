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