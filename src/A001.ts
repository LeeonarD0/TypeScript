/* eslint-disable */


// Basics Types(Here happen error of types)
let nome: string = 'leo' // Anytype of string
let age: number = 0b1010 // 10, 1.4, -55, 0xf00d, 0a9323
let adult: boolean = true; //true or false
let simbol: symbol = Symbol('Any-symbol') // symbol
//

// Arrays //
const arrayOfNumber: Array<number> = [1, 2, 3];
const arrayOfNumber2: number[] = [1, 2, 3];
const arraysOfStrings: Array<string> = ['test', 'ds', 'L'];
const arraysOfStrings2: string[] = ['test', 'test2', 'test']

// Objects

const people: {name: string, age: number, adults?: boolean} = {
  name: 'Leo',
  age: 43,
};

console.log(people.name)

//functions

function Add(x: number, y: number): number{
  return x+y
}

const Add2: (x: number, y: number) => number = (x, y) => x + y
