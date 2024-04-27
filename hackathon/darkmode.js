let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let mode = document.getElementById("mode");
let dark = ()=>{
    moon.remove();
    mode.appendChild(sun);
    document.getElementsByTagName("body")[0].style.backgroundColor="#222";
    document.getElementsByTagName("body")[0].style.color="white";
    document.getElementsByTagName("nav")[0].style.backgroundColor="rgb(7, 60, 0)";
    document.getElementsByTagName("nav")[0].style.boxShadow="-5px -5px 5px rgba(0, 0, 0, 0.54) inset";
    localStorage.setItem("theme","dark");
}
let light = ()=>{
    sun.remove();
    mode.appendChild(moon);
    document.getElementsByTagName("body")[0].style.backgroundColor="white";
    document.getElementsByTagName("body")[0].style.color="black";
    document.getElementsByTagName("nav")[0].style.backgroundColor="rgb(9, 110, 0)";
    document.getElementsByTagName("nav")[0].style.boxShadow="-2px -2px 5px rgba(0, 0, 0, 0.44) inset";
    localStorage.setItem("theme","light");

}
sun.addEventListener("click",light);
moon.addEventListener("click",dark);
if(localStorage.getItem("theme")=="light") light();
else dark();