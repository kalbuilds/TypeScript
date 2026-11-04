//union types |

function calculateDiscount(
    price: number,
    discount: number
): number | null {
    if(price < 0 || discount < 0 || discount > 100){
        return null
    }
    return price -(price * discount / 100);
} // funtion either return the number or null

console.log(calculateDiscount(60,10));


function login(user:string | number):void {
    console.log(`Logging in : ${user}`);
}


console.log(login("KaleabSintayehu@gmail.com"))

console.log(login(8990))
type user = {
    name: string;
    email: string;
}

type admin = {
    name: string;
    permissions: string[];
}

let account: user | admin;

// console.log(account)

//literal types 

let status: string = "active";
//this allow ant string to override it
status = "inactive";
status = "pending";
status = "anything";
//using th literal types

let status1: "active" | "inactive" | "pending";

status1 = "active";//valid
status1 = "inactive";//valid
// status1 = "blocked";//error
// and also can numeric literal types

//it prevents unexpected values.

//type narrowing

// function displayId(id: string | number): void {
//     console.log(id)
// }

// displayId(6);
//type narrowing mean reducing a variable possible types based on a condition

function displayId(id: string | number): void {
    if(typeof id === "number"){
        console.log(id * 2)
    } else{
        console.log(id.toUpperCase());
    }
}

displayId(6);
displayId("kaleab");


//typeof operator

console.log(typeof "Kal");
console.log(typeof 20);
console.log(typeof true);

//typescript uses it to narrow types


function process(value:string | number | boolean): void {
    if(typeof value === "string"){
        console.log(value.toUpperCase());
    }

    else if(typeof value === "number"){
        console.log(value.toFixed(2));
    } else{
        console.log(value ? "yes" : "No")
    }
}

process("kal");
process(100);
process(true);

//the in operator

interface Student {
    name: string;
    department: string;
}

interface Teacher {
    name: string;
    subject: string;
} // both are the same but their other properties are different

const Student1: Student ={
    name: "kaleab",
    department: "soft",

}

function displayPerson(person: Student | Teacher): void {
    console.log(person.name);
}

function displayPerson2(person: Student | Teacher): void {

    if ("department" in person) {
        console.log(`Student department: ${person.department}`);

    } else {
        console.log(`Teacher subject: ${person.subject}`);
    }

}

displayPerson2(Student1)

//discriminated unions


type cashPayment = {
    type: "cash",
    amount: number,
}

type CardPayment = {
    type: "card";
    amount: number;
    cardNumber: string;
};

type BankPayment = {
    type: "bank";
    amount: number;
    bankName: string;
};

type Payment = cashPayment | CardPayment | BankPayment;