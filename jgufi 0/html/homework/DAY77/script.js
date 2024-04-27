slider = [...document.getElementsByClassName("sld")];
btn = document.getElementById("next");
par = document.getElementById("par");
num = 0;
console.log(slider);
for(let i=1;i<slider.length;i++){
    slider[i].remove();
}
btn.addEventListener("click",()=>{
    slider[num].remove();
    if(num==slider.length-1) num = -1;
    par.appendChild(slider[++num]);
})