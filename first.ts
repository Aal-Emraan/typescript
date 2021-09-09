const number = 6;
let myName = 'aal emraan';
console.log('hello typescript', number,myName);

let yourName: string = 'cool dude';
let num: number = 50;
let validation: boolean = true;

function addNumbers(x: number, y: number): number{
    const added = x + y;
    return added
}

addNumbers(5, 40);

const salaries: number[] = [43895,467576,78,45,345,35];
salaries.push(39284);
const friends: string[] = ['name', 'all', 'emraan', 'aal'];
friends.push('boy');
friends[0] = 'boss';
salaries[1] = 489;

// object declaration in typescript
type values = {name: string, age: number, salary: number};
const person: values = {name:'aal emraan', age: 23, salary: 34000}
const person2: {name: string, age: number, company: string} = {
    name: 'aal emraan',
    age: 23,
    company: 'google'
}