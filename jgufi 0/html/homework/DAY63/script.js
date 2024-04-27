const form = document.getElementById("form")
const acc = function(email,pass){
    this.email=email;
    this.pass=pass;
} 
const arr=[]
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(form.elements.pass.value==form.elements.repeatpass.value){
        arr.push(new acc(form.elements.email.value,form.elements.pass.value));
        console.log(arr);
    }
})