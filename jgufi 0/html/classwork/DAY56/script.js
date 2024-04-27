// for(let i=1;i<=1000;i++) console.log(i+". I Love You");
// console.log(-Math.abs(prompt("enter number")))
let sum=0,len=0;
prompt().split(',').map(item=>{sum+=Number(item);++len})
console.log(sum/len);