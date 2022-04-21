const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

const lista1Count = {};                                     //Crea un objeto vacío

lista1.map(                                                 //recorre el array y aplica la funcion
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(        //Trasnforma el objeto en una lista y aplica sort
    function(elementoA,ElementoB){
        return elementoA[1] - ElementoB[1]
    }
);        

const moda = lista1Array[lista1Array.length - 1];