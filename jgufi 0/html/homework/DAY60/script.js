const person={
    name:"Mate",
    age:13,
    city:"Tbilisi",
    greet: function(saxeli){
        print(`Hello ${saxeli}`);
    }
}
const person2={
    name:"Mate",
    age:13,
    city:"Tbilisi",
    greet: function(saxeli){
        print(`Hello ${saxeli}`);
    }
}
console.log(person.age);
person.age=14;
console.log(person.age);
person.country="Georgia";
console.log(person===person2);

const school={
    name:"Komarovi",
    students:[
        {
            name:"Mate",
            age:"13"
        },
        {
            name:"Luka",
            age:"20"
        }
    ] 
}
console.log(school);
console.log(school.students[0].name);

const calculator={
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    }
}
console.log(calculator.divide(32,0))