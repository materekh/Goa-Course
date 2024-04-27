// const manualFilter = (func,lis) => {
//     let ans = []
//     for(let i of lis) if(func(i)) ans.push(i);
//     return ans;
// }

// console.log(manualFilter((num) => num > 5,[5,4,3,4,5,3,3,8,6,9,6,4,2,192]))

// const manualMap = (func,lis) => [...function* (lis,func) {for(let i of lis) yield func(i)}(lis,func)]

// console.log(manualMap((num) => num + 2,[2,5,4,3,5,7]))

let lis = [1,5,4,true,2,"ferma",324.23,"abs",342,2342.23423,{a: 1, b: 2}]
console.log(lis.filter((num) => typeof(num) == "number" && num == num - num%1))

let lis2 = [1,5,4,2,324,342,2342]
console.log(lis2.map((num,ind) => ((ind%2) ? num : num*2)))
