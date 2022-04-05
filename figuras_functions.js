//Codigo del cuadrado
console.group("Cuadrados");              //Agrupo los mensajes en consola has llegar al console.groupEnd

function perimetroCuadrado(lado){
    return lado *4
}

function areaCuadrado(lado){
    return lado * lado
} 

console.groupEnd();

//Codigo del Triangulo

console.group("Triangulos"); 

function perimetroTriangulo(lado1, lado2 ,base){
    return  lado1 + lado2 + base
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2
} 

console.groupEnd();

//Codigo del cìrculo
console.group("Cìrculos"); 

function diametroCirculo(radio){
    return radio * 2
}

const PI = Math.PI;

function perimetroCirculo(radio){
    var diametro = diametroCirculo(radio)
    return diametro * PI
} 

function areaCirculo(radio){
    return (radio * radio) * PI
} 

console.groupEnd();