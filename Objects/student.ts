interface Student{
    readonly id: number;
    name: string;
    age:number;
    department:string;
    email?: string;
    isEnrolled: boolean;
};


const Student1: Student ={
    id: 89,
    name: "kaleab",
    age:50,
    department: "soft",
    email: "softkaleab@gmail",
    isEnrolled : true

}


const Student2: Student ={
    id: 89,
    name: "kaleab",
    age:50,
    department: "soft",
    email: "softkaleab@gmail",
    isEnrolled : true

}

const Student3: Student ={
    id: 89,
    name: "kaleab",
    age:50,
    department: "soft",
    email: "softkaleab@gmail",
    isEnrolled : true

}

function displayStudnt(students: Student[]):void {

    students.forEach(student => {
         console.log(`${student.name}: ${student.age} ETB`);

    })

}


displayStudnt([Student1,Student2,Student3])