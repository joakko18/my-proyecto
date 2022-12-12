var pesos = null;
var dolares = null;
var valordolar = document.getElementById("dolares")

function ResultTest(){
    pesos = document.getElementById("pesosPag").value;
    
    console.log(pesos);
dolar()
}

function dolar(){
    pesos = pesos / 309
    dolares = pesos;
    valordolar.innerText = dolares
}