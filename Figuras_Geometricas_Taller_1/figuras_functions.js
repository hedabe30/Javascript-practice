//Codigo del cuadrado

function perimetroCuadrado(lado){
    return lado *4
}

function areaCuadrado(lado){
    return lado * lado
} 

//Codigo del Triangulo

function perimetroTriangulo(lado1, lado2 ,base){
    return  lado1 + lado2 + base
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2
} 

//Codigo del cìrculo

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

/////////////////////Calculo cuadrados//////////////////////

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado"); 
    const lado = input.value;

    const perimetro = perimetroCuadrado(lado);

    document.getElementById("resultado").textContent = perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado"); 
    const lado = input.value;

    const area = areaCuadrado(lado);
    document.getElementById("resultado").textContent = area;
}

/////////////////////Calculo triangulos//////////////////////

function calcularTriangulo(){
    const l1 = parseInt(document.getElementById("InputTrianguloLado1").value);
    const l2 = parseInt(document.getElementById("InputTrianguloLado2").value);
    const base = parseInt(document.getElementById("InputTrianguloBase").value);
    const altura = parseInt(document.getElementById("InputTrianguloAltura").value);

    const perimetro = perimetroTriangulo(l1,l2,base);
    const area = areaTriangulo(base,altura)

    document.getElementById("lblPerimetroTriangulo").textContent = perimetro;
    document.getElementById("lblAreaTriangulo").textContent = area;
}

/////////////////////Calculo Circulo//////////////////////

function calcularCirculo(){
    const radio = parseInt(document.getElementById("InputCirculo").value);

    const diametro = diametroCirculo(radio);

    const perimetro = perimetroCirculo(radio);

    const area = areaCirculo(radio);

    document.getElementById("lblDiametroCirculo").textContent = diametro;
    document.getElementById("lblPerimetroCirculo").textContent = perimetro;
    document.getElementById("lblAreaCirculo").textContent = area;
    
}

/////////////////////Altura de un triangulo Isóceles//////////////////////

function calcularAlturaIsoceles(){
    const l1 = parseInt(document.getElementById("InputTrianguloIsocelesLado1").value);
    const l2 = parseInt(document.getElementById("InputTrianguloIsocelesLado2").value);
    const base = parseInt(document.getElementById("InputTrianguloIsocelesBase").value);

    if(l1 == l2){
        const altura = Math.sqrt((l1*l1)-((base*base)/4))
        document.getElementById("lblAlturaTriangulo").textContent = altura;
    }else{
        document.getElementById("lblAlturaTriangulo").textContent = "los lados no son iguales!!";
    }
}




