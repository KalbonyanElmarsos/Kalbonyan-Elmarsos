'use strict';

// ------------- 208. Constructor Functions and the new Operator ----------------------------------------------------------
// /*
// - Create Object using function constructor
function Person(firstName, birthYear) {
  // console.log(this); // Person {} when it was empty

  this.firstName = firstName;
  this.birthYear = birthYear;
}
const mahmoud = new Person('mahmoud', 1997);
console.log(mahmoud); //Person {firstName: 'mahmoud', birthYear: 1997}

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const ali = new Person('ali', 1999);
console.log(ali); //Person {firstName: 'ali', birthYear: 1999}
console.log(ali instanceof Person); // true
// */
// ------------- 209. Prototypes ----------------------------------------------------------
// /*
console.log(Person.prototype); //{constructor: ƒ}
Person.prototype.calcAge = function () {
  console.log(2030 - this.birthYear);
};
mahmoud.calcAge(); // 33
ali.calcAge(); // 31

console.log(ali.__proto__); //{constructor: ƒ}
console.log(ali.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(ali)); // true
console.log(Person.prototype.isPrototypeOf(mahmoud)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.nationality = 'Egyptian';
console.log(ali.nationality); //Egyptian
console.log(mahmoud.nationality); //Egyptian

console.log(ali.hasOwnProperty('firstName')); // true
console.log(ali.hasOwnProperty('nationality')); // false
//*/
// ------------- 211. Prototypal Inheritance on Built-In Objects ----------------------------------------------------------
// /*
console.log(ali.__proto__); //{nationality: 'Egyptian', calcAge: ƒ, constructor: ƒ}
console.log(ali.__proto__.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}--> refers to the global Object prototype
console.log(ali.__proto__.__proto__.__proto__); // null --> as the global Object do not refer to any thin further
console.dir(Person.__proto__); // refer to the global Object prototype

const arr = [2, 2, 1, 1, 2, 4, 6, 7];
console.log(arr.__proto__); // refer to the Array prototype object
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__); // refer to the global Object

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique()); //[2,1,4,6,7]

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);

//*/
// ------------- 213. ES6 Classes  ----------------------------------------------------------
// /*
// 1) class expression
//  const PersonCl = class{}

//  2) class Declaration
class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Method will be added to the prototype property

  calcAge() {
    console.log(2040 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2040 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else {
      alert(`${name} is not a full name!`);
    }
  }
  get fullName() {
    return this._fullName;
  }
  // -215. Static Methods
  static hey() {
    console.log('Hey ther');
  }
}

const aliClass = new PersonClass('ali ali', 1999);
console.log(aliClass);
aliClass.calcAge();
console.log(aliClass.age);
console.log(aliClass.__proto__ === PersonClass.prototype);

// PersonClass.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens --> can passed and returned from a fucntion
// 3. Classes are executed in strict mode

//*/
// ------------- 214. Setters and Getters ----------------------------------------------------------
// /*
const account = {
  owner: 'ali',
  movements: [200, 20, 150, 400, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); //300
account.latest = 700;
console.log(account.movements); //[200, 20, 150, 400, 300, 700]
// const aliObj = new PersonClass('ali', 1999);
const aliObj = new PersonClass('ali youssef', 1999);
//*/
// ------------- 215. Static Methods ----------------------------------------------------------
// /*

//  Static function
Person.hey = function () {
  console.log('Hey ther');
};
Person.hey(); //Hey ther
//*/
// ------------- 216. Object.create ----------------------------------------------------------
// /*
const PersonProto = {
  calcAge() {
    console.log(2040 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven); // {}
steven.name = 'steven';
steven.birthYear = 1999;
steven.calcAge();
console.log(steven.__proto__ == PersonProto); // true
const sarah = Object.create(PersonProto);
sarah.init();
sarah.calcAge();

//*/
// ------------- 218. Inheritance Between "Classes": Constructor Functions ----------------------------------------------------------
// /*

Person.prototype.calcAge = function () {
  console.log(2040 - this.birthYear);
};
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  // this.firstName = firstName;
  // this.birthYear = birthYear
  this.course = course;
};

// Link student prototype with the Person prototype in chaining way
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const hend = new Student('hend', 2022, 'CS');

hend.introduce(); //My name is hend and I study CS
hend.calcAge(); // 18

console.log(hend.__proto__); //Person {introduce: ƒ}
console.log(hend.__proto__.__proto__); //{nationality: 'Egyptian', calcAge: ƒ, constructor: ƒ}

console.log(hend instanceof Student); // true
console.log(hend instanceof Person); // true
console.log(hend instanceof Object); // true

console.dir(Student.prototype.constructor); //Person(firstName, birthYear)

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); //ƒ Student(firstName, birthYear, course)

//*/
// ------------- 220. Inheritance Between "Classes": ES6 Classes  ----------------------------------------------------------
// /*
class StudentClass extends PersonClass {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}
const shams = new StudentClass('shams ali', 2020, 'CS');

shams.introduce(); //My name is shams ali and I study CS
shams.calcAge(); //20

//*/
// ------------- 221. Inheritance Between "Classes": Object.create ----------------------------------------------------------
// /*
const PersonProto1 = {
  calcAge() {
    console.log(2040 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const jo = Object.create(PersonProto1);

const StudentProto = Object.create(PersonProto1);
// override init method in the StudentProto object
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto1.init.call(this, firstName, birthYear);
  this.course = course;
};

// override introduce method in the StudentProto object

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init('Jay', 2022, 'CS');
jay.introduce();
jay.calcAge();

//*/
// ------------- 222. Another Class Example  223. Encapsulation: Protected Properties and Methods && 224. Encapsulation: Private Class Fields and Methods----------------------------------------------------------
// ------------- 223. Encapsulation: Protected Properties and Methods && 224. Encapsulation: Private Class Fields and Methods----------------------------------------------------------
// ------------- 224. Encapsulation: Private Class Fields and Methods----------------------------------------------------------
// ------------- 225. Chaining Methods ----------------------------------------------------------
// /*
class Account {
  // 1) public property
  local = navigator.language;

  // 2) private property
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //  protected properties
    this.#pin = pin;
    // this._movements = [];
    // this.local = navigator.language;

    console.log('thanks for opening an account');
  }
  deposit(value) {
    // this.#movements.push(value);
    this._movements.push(value);
    return this;
  }
  withdrawal(value) {
    // this.#movements.push(-value);
    this._movements.push(-value);
    return this;
  }
  //  protected methods
  _approveLoan(value) {
    // 3)private method
    // #approveLoan(value) {
    return true;
  }
  requestLoan(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
      console.log('Loan approved');
      return this;
    }
  }
  getMovements() {
    return this._movements;
  }
  // shared among all instances
  static sharedFunc() {}
}

const accountObj = new Account('ali', 'E', 1111);

// - Bad practice
// accountObj._movements.push(200)
// accountObj._movements.push(-300)

// - Best practice
accountObj.deposit(200);
accountObj.withdrawal(-300);

// - Bad practice
accountObj._approveLoan(200); // this function must be private
accountObj.requestLoan(200);

console.log(accountObj.pin); // this also not allowed pin must be private
// console.log(accountObj.#movements);// not allowed
// console.log(accountObj.#pin);// not allowed

Account.sharedFunc();
// --225. Chaining Methods
accountObj.deposit(300).deposit(200).withdrawal(300).requestLoan(100);

//*/

// ------------- 226. ES6 Classes Summary  ----------------------------------------------------------
// /*

//*/
