"use strict";
function printperson(obj) {
    console.log(`${obj.firstName} is ${obj.age} old`);
}
let a = [5, 3, 4, 5, 124, 5233];
a.forEach(elem => a.push(elem + 3 /* constants.num1 */));
a.forEach(elem => a.push(elem + 2 /* constants.num2 */));
a.forEach(elem => elem = Math.round(elem));
console.log(a);
let person = {
    firstName: "mate",
    age: 13
};
console.log(person);
printperson(person);
