let act=1,activeSkill=0;
let skilltxt1=document.getElementById("sktxt1");
let skilltxt2=document.getElementById("sktxt2");
let skilltxt3=document.getElementById("sktxt3");
let skparent=skilltxt1.parentElement;
function sleep(i){
    let d=new Date();
    let before=d.getTime();
    let after=before;
    while(after-before<i){
        d=new Date();
        after=d.getTime();
    }
}
//function that gets called every frame(0.05s)
function frame(){
    sleep(50);
    document.getElementById("skill1").style.textDecoration="none";
    document.getElementById("skill2").style.textDecoration="none";
    document.getElementById("skill3").style.textDecoration="none";
    if(act===1){
        activeSkill=document.getElementById("skill1");
        skilltxt1.remove();
        skilltxt2.remove();
        skilltxt3.remove();
        skparent.appendChild(skilltxt1)
    }
    if(act===2){
        activeSkill=document.getElementById("skill2");
        skilltxt1.remove();
        skilltxt2.remove();
        skilltxt3.remove();
        skparent.appendChild(skilltxt2)
    }
    if(act===3){
        activeSkill=document.getElementById("skill3");
        skilltxt1.remove();
        skilltxt2.remove();
        skilltxt3.remove();
        skparent.appendChild(skilltxt3)
    }
    activeSkill.style.textDecoration="underline";
}
//change skill description text
function changeActive(i){
    act=i;
}
setInterval(frame,50);