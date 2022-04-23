var lista = []

const listaObj = {}

///////////////Creación de lista /////////////////

function creacionLista() {
    const input = document.getElementById("datoDeLista"); 
    const dato = parseInt(input.value), $dato = document.querySelector("#datoDeLista");

    if(dato){
        lista.push(dato);               //Se ahce para que el dato exista
    }

    document.getElementById("lista").innerText = lista;
    $dato.focus();                      //coloca el focus en el input despues de agregar dato
}                   

function borrarLista(){
    lista = []
    document.getElementById("lista").innerText = lista;
}

///////////////////////Calcular Promedio/////////////////////
function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista
}

//////////////////////Calcular Mediana////////////////////////
function calcularMediana(lista){
    const mitadLista = parseInt(lista.length / 2);

    if(lista.length%2 == 0){
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];
    
        return mediana = calcularMediaAritmetica([elemento1,elemento2])
    } else {
        return mediana = lista[mitadLista]
    }

}

////////////////////Calcular Moda//////////////////////////////////
function calcularModa(lista) {
    const listaCount = {}

    lista.map(                                                 //recorre el array y aplica la función
    function (elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1;
        }
    });

    console.log(listaCount)
    const listaArray = Object.entries(listaCount).sort(        //Trasnforma el objeto en una lista y aplica sort
    function(elementoA,ElementoB){
        return elementoA[1] - ElementoB[1]
    });

    console.log(listaArray)

    const moda = listaArray[listaArray.length - 1];

    return moda[0];
}

///////////////////////////CALCULAR TODO///////////////////////////////
function calcular(){
    const listaOrdenada = lista.sort(function(a,b){
        return a - b;
    });

    const Promedio = calcularMediaAritmetica(listaOrdenada);

    const muestraPromedio = document.getElementById("muestra-promedio");
    muestraPromedio.innerText = Promedio;

    const mediana = calcularMediana(listaOrdenada);

    const muestraMediana = document.getElementById("muestra-mediana");
    muestraMediana.innerText = mediana;
    
    const moda = calcularModa(listaOrdenada);

    const muestraModa = document.getElementById("muestra-moda");
    muestraModa.innerText = moda;


}