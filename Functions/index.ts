//Functions
//java script

function add(a,b){
    return a + b;
}

console.log(add(10,20));

//if we use 
console.log(add(20, "90"));// output 2090 whcich joins the string and number

//In Typescipt

function addTS(a:number, b:number): number {
    return a + b;
}

console.log(addTS(70,80));

// console.log(addTS(70,"90"));// error or warning

function getName(): string{
    return "kaleab";
}
console.log(getName());

function getAge(): number{
    return 20;
}

console.log(getAge())

//vois functions

function greet(): void{
    console.log("Hello TypeScript am coming for you")
}

greet();


//optional parameters


//js
// function greeting(name){
//     console.log(`Hello ${name}`);
// }

// greeting("kal");

// greeting();//error- Hello undefined

//In typescript


//optional parameter using ?(indicates that the parameter is optional)

function greeting(name?:string): void{
    console.log(`Hello ${name ?? "Guest"}`);
    //?? -> if the name is null or undefinded use "Guest" instead of it 

}

greeting("kaleab");
greeting();

//required parameter must come before optional parameters

function introduce(name: string, age?: number): void {
    console.log(name, age);
}//Yoda 90
// function introduce(age?: number, name: string): void {
//     console.log(name, age);
// }// 90 yoda
introduce("Yoda",90);


//Default parameters

function selam(name: string = "Guest"): void{
    console.log(`Hello ${name}`)
}
selam("Yoda"); //Hello Yoda
selam();// Hello Guest


//Arrow functions

// const multiply = (a,b)=>{
//     return a * b;
// }

// console.log(multiply(89,90));

// const multiply = (a:number, b:number): number =>{
//     return a * b;
// }
const multiply = (a: number, b: number): number => a * b;

 console.log(multiply(89,90));

 const handleClick = (): void => {
    console.log("Button clicked");
};

console.log(handleClick());

// can define the structure of a function and assign funtions that follow that structure

let calculate: (a:number, b:number)=>number;

calculate = (a,b)=>{
    return a +b;
}

console.log(calculate(10,20));


//we can reuse such kind of functions

type Operation = (a:number, b:number)=> number;

const add1: Operation = (a,b) => a+b;
const substract: Operation = (a,b) => a-b;
const multiply1: Operation = (a,b) => a*b;

console.log(add1(90,9));
console.log(substract(90,9));
console.log(multiply1(90,9));