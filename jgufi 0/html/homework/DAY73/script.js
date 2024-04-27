let rocket = document.getElementById("rocket");
const fix = (arg) =>{
    return Number(arg.slice(0,arg.length-2))
}
window.addEventListener("keydown", (event) => {
    if(event.key == "ArrowRight"){ 
        rocket.style.transform = "rotate(15deg)"
        if(fix(rocket.style.left)+10<=screen.availWidth-220) rocket.style.left = fix(rocket.style.left)+10+"px";
    }
    if(event.key == "ArrowLeft"){
        rocket.style.transform = "rotate(195deg)"
        if(fix(rocket.style.left)-10>=0) rocket.style.left = fix(rocket.style.left)-10+"px";
    }
    if(event.key == "ArrowUp"){
        rocket.style.transform = "rotate(285deg)"
        if(fix(rocket.style.top)-10>=0) rocket.style.top = fix(rocket.style.top)-10+"px";
    }
    if(event.key == "ArrowDown"){
        rocket.style.transform = "rotate(105deg)"
        if(fix(rocket.style.top)+10<=screen.availHeight-310) rocket.style.top = fix(rocket.style.top)+10+"px";
    }
})