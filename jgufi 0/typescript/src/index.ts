const enum constants{
    num1=3,
    num2=2
}
function printperson(obj: {firstName:string,age:number}): void{
    console.log(`${obj.firstName} is ${obj.age} old`)
}
let a: number[]=[5,3,4,5,124,5233]
a.forEach(elem=>a.push(elem+constants.num1))
a.forEach(elem=>a.push(elem+constants.num2))
a.forEach(elem=>elem=Math.round(elem))
console.log(a);
let person: {firstName: string,age: number} = {
    firstName:"mate",
    age:13
}
console.log(person)
printperson(person)