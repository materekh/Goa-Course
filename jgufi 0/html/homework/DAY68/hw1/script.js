let btn = document.getElementById("btn");
let cnt = document.getElementById("cnt");
let div = document.getElementById("div");
btn.addEventListener("click",()=>{
    cnt.textContent = Number(cnt.textContent) + 1;
    div.style.backgroundColor = (div.style.backgroundColor == "red") ? "blue" : "red";
    cnt.style.color = (cnt.style.color == "blue") ? "red" : "blue";
})