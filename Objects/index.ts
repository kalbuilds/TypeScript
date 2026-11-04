//objects 
//In javascript

// const user = {
//     name: "kaleab",
//     age: 20,
//     email: "kaleabsintayehu@gmail",
//     isStudent: true
// }

// console.log(user.name);
// console.log(user.age);

//In Typescript

const user :{
    name: string,
    age: number,
    email: string,
    isStudent : boolean;
} = {
    name: "kaleab",
    age: 20,
    email:"kaleansintayehu@gmail.com",
    isStudent: true
};

console.log(user);

//Type aliases -> used to create reusable blueprint for describing data 

// type typename = {
//   propertNmae: datatype;
// }

type user ={
    name: string;
    age: number;
    email: string;
    isStudent: boolean;
}
function displayUser(user: user): void{
    console.log(`Name ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`)

}

const kal: user = {
    name: "Kal",
    age: 20,
    email: "kal@gmail.com",
    isStudent: true
};
displayUser(kal);

const user2: user = {
    name: "John",
    age: 24,
    email: "john@gmail.com",
    isStudent: false
};


//Interface is another way to define the structure of an object

interface User {
    name: string;
    age: number;
    email: string;
    isStudent: boolean;
} //we can use it just like alias

const yoda: User = {
    name: "yoda",
    age: 19,
    email: "yoda@gmail.com",
    isStudent: true
};


//diffrence of type vs interface -> both can describe object structure but have some diffrence 

type User3 = {
    name: string;
    age: number;
}

//interface 
interface User4 {
    name: string;
    age: number;
}

//diffrence 1 : union types 

//type alias can represent multiple possible types

type ID = number | string;

let userId: ID = 1000;
console.log(userId)
userId = "rull34/17";// valid 
console.log(userId);
//can not directly define this kind of union using an interface 

//diffrence 2 : extending structures

//both support extending 

//with interface 

interface UserData {
    name: string;
    age: number;
}

interface Admin extends UserData{
    permissions: string[];
}

const admin: Admin = {
    name: "kaleab",
    age: 20,
    permissions: ["create", "delete","update"]
} //admin in herits the properties of the user and adds its own property

console.log(admin)

//with type 

type UserData1 = {
    name: string;
    age: number;
};

type admin = UserData1 & {
    permissions : string[]
} //& symbol is called an intersection type-> It combines types.

console.log(admin)


//diffrence 3 declaration merging 

//special feature of interface -> can delare the same interffce more than once and typescript combine their properties

interface User {
    name: string;
}

interface User {
    age: number;
}

const userkal: User = {
    name: "Kal",
    age: 20
};

console.log(userkal);

//type alias doesn't support this behavior

//optional properties
interface useryoda{
    name:string;
    age: number;
    email: string;
    profilePicture?: string;
} // the question mark means the property may or may not exist 



const userInfo: useryoda = {
    name: "Kaleab sintayehu",
    age: 20,
    email: "kal@gmail.com"
};

const userInfo1: useryoda = {
    name: "John",
    age: 25,
    email: "john@example.com",
    profilePicture: "john.jpg"
};

//read only sometimes we want to prevent from being changed 

interface Selam {
    readonly id: number;
    name: string;
    age:number;

}

const users: Selam = {
    id: 203,
    name: "Selam",
    age: 20
};

users.name = "Emahos";
console.log(user.name);

// user.id =201; // error

// console.log(user.id);


// nested interfaced 

interface kal{
    name:string;
    age:number;
    address:{
        city: string;
        country: string;
    };
}

const kals: kal ={
    name: "kaleab",
    age:20,
    address:{
        city:"Addis Ababa",
        country: "Ethiopia"
    }
}

console.log(kals.address.city)

//can create separate interface to make the structure reusable

interface Address1{
    city: string;
    country: string;
}

interface Ablu {
    name: string;
    age: number;
    address: Address1;
}

interface Product {
    readonly id: number;
    name: string;
    price: number;
    description?: string;
    category: string;
    inStock: boolean;
}

const product1: Product = {
    id: 1,
    name: "Laptop",
    price: 45000,
    category: "Electronics",
    inStock: true
};

const product2: Product = {
    id: 2,
    name: "Keyboard",
    price: 1500,
    description: "Mechanical keyboard",
    category: "Accessories",
    inStock: false
};

function displayProducts(products: Product[]): void {
    products.forEach(product => {
        console.log(`${product.name}: ${product.price} ETB`);
    });
}

displayProducts([product1, product2]);