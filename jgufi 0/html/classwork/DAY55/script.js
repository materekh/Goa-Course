input=[document.getElementById("inp1"),document.getElementById("inp2")];
button=document.getElementById("button");
button.addEventListener("click",() => {console.log(input.map((item)=>Number(item.value)))})