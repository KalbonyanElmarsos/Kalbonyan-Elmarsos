/* ***************************
Coding Challenge #1
* *****************************
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK 
*/

// 1)
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

//  2)
Car.prototype.accelerate = function (value) {
  this.speed += value;
  console.log(`${this.make} is Going at ${this.speed} km/h`);
};

// 3)
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
// 4)
const bmw = new Car('BMW', 200);
const Mercedes = new Car('Mercedes', 120);

bmw.accelerate(10);
bmw.accelerate(5);
bmw.accelerate(15);
bmw.accelerate(3);

Mercedes.brake(10);
Mercedes.brake(4);
Mercedes.brake(15);
Mercedes.brake(20);

/* ***************************
Coding Challenge #2
* *****************************
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
GOOD LUCK
*/

// 1)
class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  // 2)
  get speedUS() {
    return this.speed / 1.6;
  }

  // 3)
  set speedUS(value) {
    return value * 1.6;
  }
  accelerate(value) {
    this.speed += value;
    console.log(`${this.make} is Going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
}
// 4)
const honda = new CarClass('honda', 200);
console.log(honda.speedUS);
honda.accelerate();
honda.accelerate();
honda.brake();
honda.speedUS = 20;
console.log(honda);

/* ***************************
Coding Challenge #3
* *****************************
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism �
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/

// 1)
// already done in challange #1
// 2)
const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
Ev.prototype = Object.create(Car.prototype);
Ev.prototype.chareBattery = function (chargeTo) {
  this.charge = chargeTo;
};
// 3)
Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is Going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};
// 4)
const honda3 = new Ev('Tesla', 200, 25);
honda2.chareBattery(90);
console.log(honda2);
honda2.accelerate();

/* ***************************
Coding Challenge #4
* *****************************
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK
*/
class EVClass extends CarClass {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chareBattery(chargeTo) {
    this.charge = chargeTo;
    return this;
  }
  // 3)
  accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(
      `${this.make} is Going at ${this.speed} km/h, with a charge of ${this.charge}`
    );
    return this;
  }
}

// 3)
const rivian = new EVClass('Rivian', 200, 20);
console.log(rivian);
// console.log(rivian.#charge);//Erorr
rivian.accelerate().accelerate().brake().brake().chareBattery();
console.log(rivian.speedUS);
