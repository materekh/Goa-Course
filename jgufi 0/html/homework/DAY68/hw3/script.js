const upd = (item) => {
    item.textContent = Math.floor(Math.random()*10+1);
}
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let btn = document.getElementById("btn");
btn.addEventListener("click",() => {
    upd(item1)
    upd(item2)
    upd(item3)
    upd(item4)
    upd(item5)
    while(item2.textContent == item1.textContent) upd(item2)
    while(item3.textContent == item1.textContent || item3.textContent == item2.textContent) upd(item3)
    while(item4.textContent == item1.textContent || item4.textContent == item2.textContent || item4.textContent == item3.textContent) upd(item4)
    while(item5.textContent == item1.textContent || item5.textContent == item2.textContent || item5.textContent == item3.textContent || item5.textContent == item4.textContent) upd(item5)
})