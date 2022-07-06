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
