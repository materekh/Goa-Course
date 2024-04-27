// const form=document.getElementById("form");
// const btn=document.getElementById("btn");
// function makeAccObj(fname,lname,age){
//     this.firstName=fname;
//     this.lastName=lname;
//     this.age=age;
// }
// let arr=[];
// let Account=new makeAccObj("0","0",0);
// btn.addEventListener("click",function(){
//     if(Account!=null){
//         arr.push(Account);
//         console.log(arr);
//     }
//     Account=new makeAccObj(form.elements.fname.value,form.elements.lname.value,form.elements.age.value);
// })



















const form=document.getElementById("form");
const btn=document.getElementById("btn");
let arr=[];
const Account={
    firstName:'0',
    lastName:'0',
    age:0
};
btn.addEventListener("click",function(){
    arr.push(Account);
    console.log(arr);
    Account.firstName=form.elements.fname.value;
    Account.lastName=form.elements.lname.value;
    Account.age=Number(form.elements.age.value);
})