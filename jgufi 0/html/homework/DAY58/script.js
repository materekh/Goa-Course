let form1=document.getElementById("form1")
let form2=document.getElementById("form2")
let form3=document.getElementById("form3")
let btn=document.getElementById("btn")
let body=document.getElementById("body")
let info=document.getElementById("info")
class person{
    constructor(fname,lname,age){
        this.name=fname
        this.lname=lname
        this.age=age
    }
}
btn.addEventListener("click",()=>{
    let information=new person(form1.value,form2.value,form3.value)
    info.innerHTML+=`
    <div class="info">
        <p>First name: ${information.name}</p>
        <p>Last name: ${information.lname}</p>
        <p>Age: ${information.age}</p>
    </div>`
})