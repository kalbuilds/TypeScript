//generics allow us to use or write reusable code that works with different data types while still preserving type safety.

// function getValue(value) {
//     return value;
// }

// console.log(getValue(100));
// console.log(getValue("Hello"));
// console.log(getValue(true));

//this works in the js

function getValue<T>(value: T): T {
    return value;
}


//can also let the typescript infer the type automatically or dont always need to write <number> or  <boolean>
const numberResult = getValue<number>(100);
const stringResult = getValue<string>("Hello");
const booleanResult = getValue<boolean>(true);

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);

//generic with arrays => with out generics  might to write the separate funtions to access the first item form the aray as example

// function getFirstNumber(items: number[]): number {
//     return items[0];
// }

// function getFirstString(items: string[]): string {
//     return items[0];
// }
function getFirstItem<T>(items: T[]): T {
    return items[0];
}

const firstNumber = getFirstItem([10, 20, 30]);
const firstName = getFirstItem(["Kal", "John", "David"]);
const firstBoolean = getFirstItem([true, false, true]);

console.log(firstNumber)
console.log(firstName)
console.log(firstBoolean);

function pair<T,U>(first: T, second: U): [T, U] {
    return [first, second];
}

const result1 = pair<string, number>("Age", 25);
const result2 = pair<number, boolean>(100, true);

console.log(result1);
console.log(result2);

// generic with interfaces 

interface api<T>{
    success: boolean,
    message: string;
    data: T;
}