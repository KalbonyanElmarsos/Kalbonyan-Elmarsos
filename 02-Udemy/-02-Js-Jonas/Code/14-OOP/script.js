'use strict';

/***********************************************/
//  Constructor Functions and the new Operator
/***********************************************/

/*
// We use only function  Declarations and function Expressions.
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // you should never do -this- (You should never create a method inside of a constructor function)
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
const menna = new Person('Menna', 2006);
console.log(menna);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const manal = new Person('Manal', 1996);
const jana = new Person('Jana', 2013);
console.log(manal, jana);

console.log(menna instanceof Person); // true
// const Rita = 'Rita';
// console.log(Rita instanceof Person); // false

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey();
 */

/******************************/
// Prototypes
/******************************/

/*
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

menna.calcAge();
manal.calcAge();

console.log(menna.__proto__);
console.log(menna.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(menna));
console.log(Person.prototype.isPrototypeOf(manal));
console.log(Person.prototype.isPrototypeOf(Person));

// .PrototypeOfLinkedObject

Person.prototype.species = 'Homo Sapiens';
console.log(menna.species, manal.species);

console.log(menna.hasOwnProperty('firstName'));
console.log(menna.hasOwnProperty('species'));
 */

/***************************************************/
// Prototypal Inheritance on Built-In Objects
/***************************************************/

/*
console.log(menna.__proto__);
// Object.prototype (top of prototype chain)
console.log(menna.__proto__.__proto__);
console.log(menna.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [8, 2, 8, 4, 2, 6, 9, 7]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
 */

/***********************************/
// ES6 Classes
/***********************************/

/*
// class Expression
// const PersonCl = class {};

// class Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes('')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}
const Rania = new PersonCl('Rania Hassan', 1998);
console.log(Rania);
Rania.calcAge();
// console.log(Rania.age);

console.log(Rania.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
Rania.greet();

// 1. Classes are not hoisted.
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode.

const walter = new PersonCl('walter White', 1965);

PersonCl.hey();
 */

/***********************************/
// Setters and Getters
/***********************************/

/*
const account = {
  owner: 'Menna',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;

console.log(account.movements);
 */

/***********************************/
// Object.create
/***********************************/

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

/*****************************************************************/
// Inheritance Between "Classes": Constructor Functions
/*********************************************************/

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const menna = new Student('Menna', 2022, 'Computer Science');
menna.introduce();
menna.calcAge();

console.log(menna.__proto__);
console.log(menna.__proto__.__proto__);

console.log(menna instanceof Student);
console.log(menna instanceof Person);
console.log(menna instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

/*****************************************************************/
//Inheritance Between "Classes": ES6 Classes
/*********************************************************/

/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  includes() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, But as a student, I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const ebrahime = new StudentCl('Ebrahime Hassan', 1998, 'Computer Science');
ebrahime.includes();
ebrahime.calcAge();
*/

/*****************************************************************/
//Inheritance Between "Classes": Object.create
/*********************************************************/

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const ritoo = Object.create(StudentProto);
ritoo.init('Ritoo', 2008, 'Computer Science');
ritoo.introduce();
ritoo.calcAge();
*/

/*****************************************************************/
// Another Class Example
/*********************************************************/

/*
// 1)Public fields
// 2)Private fields
// 3)Public methods
// 4)Private methods
// (there is also the static version)

class Account {
  // 1)Public fields (instances)
  locale = navigator.language;

  // 2)Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3)Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4)Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Menna', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining Methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/
