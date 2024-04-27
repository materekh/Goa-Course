let ind = document.getElementById("c"),num=0;
const func = () => {
    num++;
    ind.textContent=num;
    if(num==10) window.removeEventListener("click",func)
}
window.addEventListener("click",func);