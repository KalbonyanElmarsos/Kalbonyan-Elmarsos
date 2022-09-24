const mark = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();

const john = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} ${john.bmi}`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} ${mark.bmi}`
  );
} else {
}
