function identity<T>(value: T): T{
    return value;

}

console.log(identity(100))
console.log(identity("Hello Kal"))
console.log(identity(true));

function getLastItem<T> (value: T[]):T{
     return value[value.length - 1];
}

console.log(getLastItem([10, 20, 30]))
console.log(getLastItem(["React", "Node", "TypeScript"]))

interface Box<T>{
    value: T;
}

const Box1: Box<string> ={
 value: "Hello typescript"

}

const Box2: Box<number> ={
 value: 100

}

interface Student {
    name: string;
    age: number;
    department: string;
}


const box3: Box<Student> = {
    value: {
        name: "Kal",
        age: 22,
        department: "Software Engineering"
    }
};

const box4: Box<string> ={
    value: "React Developer"

}

const box5: Box<number> ={
    value: 500

}

const box6: Box<Student> ={
    value: {
        name:"kal"
    }

}