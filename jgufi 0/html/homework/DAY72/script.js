const split = (s) => {
    let lis = [];
    let num = 0;
    for(let i=0;i<s.length;i++){
        if(s[i] == ' '){
            lis.push(s.slice(num,i))
            num = i+1;
        }
    }
    lis.push(s.slice(num,s.length))
    return lis;
}

console.log(split("Hello World fw w  we wefwefds"))