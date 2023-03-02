
alert('Presione F12 o mire la consola para visualizar los resultados')

let frito = confirm("¿Deseas un huevo frito?");
let mensaje = "¡El plato esta servido! ";
if (frito) {
    hervido = false;
    mensaje += "Un huevo frito ";
} else {
    mensaje += "Un huevo cocido ";
}
let sal = confirm("¿Deseas sal en el huevo?");
if (sal) {
    mensaje += " Con sal";
} else {
    mensaje += " Sin sal"
}
console.log(mensaje); 