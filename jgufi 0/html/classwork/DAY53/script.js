const me={
    firstName:"Mate",
    lastName:"Rekhviashvili",
    age:13,
    status:"Student",
    getName: function(){
        return(me.firstName);
    },
    bankAcc: {
        money:0,
        card:2834776510294356
    }
}
const you={
    firstName:"Luka",
    lastName:"Tskhviaradze",
    age:17,
    status:"Mentor",
    getName: function(){
        return(you.firstName);
    },
    bankAcc: {
        money:10000,
        card:1836273672313724
    }
}
console.log(me.getName())


const form=document.getElementById("form");
const btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    console.log(form.elements.num1.value);
    console.log(form.elements.num2.value);
})