
alert('Presione F12 o mire la consola para visualizar los resultados')

var precios = [['Bonais', 400],
              ['Palito de helado de agua', 1000],
              ['Palito de helado de crema', 2200],
              ['Bombon helado con arequipe', 1500],
              ['Bombon helado con chispas de chocolate', 2500],
              ['Bombon helado con fresas', 2800],
              ['Medio litro de helado', 2000]];

var nombre = [];

var usuario = [];

for (let i=0; i<3; i++){
    usuario.push(Number(prompt(`Cuanto dinero tienes ${i}`)));
    nombre.push(prompt(`Indiqueme su nombre por favor ${i}`));
}

precios.sort((a, b)=> a[1] - b[1]);
var compra =[];

for (let j=0; j<precios.length; j++){
    console.log(precios[j]);
}

for (let i=0; i<usuario.length; i++) {
    let mayor = 0;
    for (let j=0; j<precios.length; j++) {
        if (usuario[i] >= precios[j][1]) {
            mayor = j;
        } else {
            break;
        }
    }
    compra.push({Nombre: nombre[i], Helado: precios[mayor][0], Valor:precios[mayor][1] , Vueltos: usuario[i]-precios[mayor][1]});
}

console.table(compra);