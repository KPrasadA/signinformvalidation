var input1 = document.getElementById("exampleInputEmail1");
var input2 = document.getElementById("exampleInputPassword1");
var input3 = document.getElementById("exampleInputPassword1");
console.log(input2.value);
console.log(input3.value);


function runner(){
    if(input2.value==input3.value)
    {
        alert("match");
    }
    else
    {
        alert("not match");
    }
}
