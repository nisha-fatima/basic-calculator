
function clickBtn(){
    alert("Click")

}

function getName(){
    var name = document.getElementById("name");
    alert(name.value)
}


function setName(){
    var name = document.getElementById("name"); 
    name.value = "Nisha";
    var para = document.getElementById("para");
    para.innerHTML = "Hello this is example"
}

setName()

function getNumber(num){
   var result = document.getElementById("result")
   result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = ""
}


function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}