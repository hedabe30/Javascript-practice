// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioConDescuento(precio,descuento){
    
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function btnCalcularPrecioConDescuento() {
    const precio = document.getElementById("inputPrice").value;
    const descuento = document.getElementById("inputDiscount").value;
    console.log(precio)
    console.log(descuento)
    
    const precioConDescuento = calcularPrecioConDescuento(precio,descuento);

    const resultP = document.getElementById("resultP")
    resultP.innerText = "El precio con descuento es: $ " + precioConDescuento;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })