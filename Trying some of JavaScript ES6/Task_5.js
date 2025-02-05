// students
// array of students that takes objects
let students = [
    { name: 'John', grade: 45 },
    { name: 'Jane', grade: 85 },
    { name: 'Dave', grade: 52 },
    { name: 'Sara', grade: 60 }
];
//Function to filter students with grades > 50
let cleverStudents = students.filter(student => student.grade >= 50).map(student => student.name);
console.log(cleverStudents);
