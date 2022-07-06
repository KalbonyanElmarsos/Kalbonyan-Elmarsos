
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
