function getValue<T>(value: T): T{
    return value;
}

//whta if we want to accept objects with anid property only -> generic constraints

//only accepts objects with an id property
function getId<T extends {id: number}>(item: T): number{
    return item.id;
}
//extend add requirement that the object must have an id property of type

console.log(getId({id:1, name: "kaleab"}));
// console.log("hello")

console.log(getId({id:2, product:"laptop"}));
// getId({ name: "Kal" });  error because  the object doesnt have an numeric id



//using keyof

interface User{
    id: number;
    name: string;
    email: string;    
}

function getProperty<T, K extends keyof T>(
    object: T,
    key:L
): T[k]{
    return object[key];
}

//key of T , means all the property names of type T

// type userkeys = keyof User;

//This equivalent to 
type userkeys = "id" | "name" | "email";

const user: User ={
    id: 1,
    name: "kaleab",
    email: "kaleabsintayehu@gmail.com"
} 


console.log(getProperty(user, "name"));
console.log(getProperty(user, "email"));
console.log(getProperty(user, "id"));


//generic functions constraints with arrays

interface Student{
    id: number;
    name: string;
    department: string;
}

function findById<T extends { id: number }>(
    items: T[],
    id: number
): T | undefined {
    return items.find(item => item.id === id);
}
const students: Student[] = [
    { id: 1, name: "Kal", department: "Software Engineering" },
    { id: 2, name: "John", department: "Computer Science" }
];

const result = findById(students, 2);

console.log(result);