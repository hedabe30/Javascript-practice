//Codigo del cuadrado
console.group("Cuadrados");              //Agrupo los mensajes en consola has llegar al console.groupEnd

const ladoCuadrado = 5;
console.log("El lado del cuadrado es: " + ladoCuadrado + "cm")

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm")

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2")

console.groupEnd();

//Codigo del Triangulo

console.group("Triangulos"); 

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

const alturaTriangulo = 5.5;

console.log("La altura del triangulo mide: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perìmetro del triàngulo es: " + perimetroTriangulo + "cm")

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2")

console.groupEnd();

//Codigo del cìrculo
console.group("Cìrculos"); 

const radioCirculo = 4;
console.log("El radio del Cìrculo es: " + radioCirculo + "cm")

const diametroCirculo = radioCirculo * 2;
console.log("El diàmetro del Cìrculo es: " + diametroCirculo + "cm")

const PI = Math.PI;
console.log("PI es: " + PI)

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del Cìrculo es: " + perimetroCirculo + "cm")

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del Cìrculo es: " + areaCirculo + "cm^2")

console.groupEnd();