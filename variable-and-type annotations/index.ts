//variable and type annotations

//syntax let variableName: dataType = value;

//js 
// let username = "Kal";
// let age = 21;
// let isStudent = true;

//ts
let username: string = "kaleab";
let age: number = 20;
let isStudent: boolean = true;

// age = "twenty"; // error

console.log(username);
console.log(age);
console.log(isStudent);

//Type interence -> type script automatically undestands the type base on the assigned values

let name =  "kalbuilds"; 
let phoneNumber = 11111111;

//array in the js 

let numbers = [10,20,30];
let names = ["kal","yoda","Emahos"];

//in type script what type of values an array should have to contain

// 2 ways 
//using type[]
let number: number[] = [20,30,40];
// let number: number[] = [10,20,"kaleab"] // error
console.log(number);

//using Array<type>

let number1: Array<number> = [70,90,490];
// number.push("40");  //error -> prevent us from adding a string to an array that should contain numbers
console.log(number1)

//Data type -> any : receive alll types of data types
//and also removes many useful complie time check
let data: any = 100;
console.log(data);
data = "Hello";
console.log(data)
data = true;
console.log(data)
data = [1, 2, 3];
console.log(data);

//Type script also supports NUll and Undefined

// Union type |
let department: string | null = "software enginnering";
console.log(department);
department = null;
console.log(department);