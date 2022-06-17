// Array Spreading

// const fruits = ["Apple", "Banana", "Orange"];
// const vegetables = ["Cucumber", "Radish"];

// console.log([...fruits, ...vegetables]);

//===================================================
// JS Objects, props and methods

const developer = {
  salary: 1000000,
  experience: 4.5,
  teckStack: ["Vue", "HTML", "CSS"],
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2;
    this.lookingForWork = false;
  },
};
console.log(developer.salary);
console.log(developer.lookingForWork);

developer.doubleSalary();

console.log(developer.salary);
console.log(developer.lookingForWork);
