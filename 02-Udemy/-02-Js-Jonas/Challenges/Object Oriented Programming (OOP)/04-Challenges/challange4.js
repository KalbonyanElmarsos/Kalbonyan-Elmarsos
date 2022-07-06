
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
