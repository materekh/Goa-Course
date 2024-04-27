// 1
let me={
    name:"Mate",
    lastName:"Rekhviashvili",
    setOwnership: function(){
        me.name="Mari";
    }
}
// 2
let car={
    model:"BMW",
    engine: {
        power:"5watt"
    }
}
// 3
// mezareba da ragac eseti iqneba
// {formid}=document.getElementById({id});
// car.model={formid}.value;
let obj1={
    model:"BMW",
}
let obj2={
    changemodel: function(){
        obj1.model="Mercedes"
    }
}