const lista1 = [
    100,
    250,
    500,
    200,
    800,
    400000000
]

const lista = lista1.sort(function(a,b){
    return a - b;
});                                 //organiza la lista de menor a mayor

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero){
    if(numero%2 == 0){
        return true;
    }else{
        return false;
    }
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista
}

function calcularMediana(lista){
    let mediana;
    
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista1-1];
        const elemento2 = lista[mitadLista1];
    
        return mediana = calcularMediaAritmetica([elemento1,elemento2])
    } else {
        return mediana = lista[mitadLista1]
    }
}
