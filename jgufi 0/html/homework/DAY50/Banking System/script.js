var form=document.getElementById("depoform");
var mon=document.getElementById("money");
var depoButton=document.getElementById("depo");
var widthButton=document.getElementById("widt");
var money=0;
function frame(){
    money=money*1.00124456518;
    mon.textContent=Math.round(money*100)/100;
}
depoButton.addEventListener('click',function(){
    money+=Number(form.value);
    mon.textContent=money;
})
widthButton.addEventListener('click',function(){
    if(money<Number(form.value)){
        alert("GOAshi girchev shesvlas, tanxebi ar gkofnis");
    }
    else{
        money-=Number(form.value);
        mon.textContent=money;
    }
})
setInterval(frame,125);