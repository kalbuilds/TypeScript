interface Student {
    name:string;
    department: string;
}

interface Teacher{
    name:string;
    subject: string;
}

const student: Student = {
    name: "Kal",
    department: "Software Engineering"
};

const teacher: Teacher = {
    name: "John",
    subject: "Programming"
};


function displayPerson(person: Student | Teacher): void{
    if ("department" in person ) {
         console.log(`Student ${person.name}`)
        console.log(`Student department: ${person.department}`);
       
    } else {
         console.log(`Teacher ${person.name}`)
        console.log(`Teacher subject: ${person.subject}`);
    }


}

displayPerson(student);
displayPerson(teacher);