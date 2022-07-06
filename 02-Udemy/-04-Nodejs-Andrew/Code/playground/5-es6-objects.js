const user = {
  name: "ali",
  age: 23,
  course: "nodejs",
};

console.log(user);

//  Destructuring
const { name: studentName, age: studentAge, course: studentCourse } = user;
console.log(studentName); //ali
console.log(studentAge); // 23
console.log(studentCourse); // nodejs
