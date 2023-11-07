const ArrayNombres = ['Luis','Beto','Cindy'];

//export default permite exportar unicamente esa variable del archivo, en cambio si se utiliza export antes del tipo de dato permite exportar la variable que contenga esta palabra reservada
export const ArrayEstadosAnimo = ['Enojado','Feliz','Emocionado'];

//Se crea la constante para exportarla despues
const OtroArrays = [];

//Manera antigua de exportar una variable de codigo
//module.exports = ArrayNombres;

//Manera vieja de exportar Varias Variables
// module.exports = {
//     ArrayNombres,
//     ArrayEstadosAnimo
// }

const Fn1 = () => {
    console.log("Soy la primera funcion");
}

function Fn2() {
    console.log("Soy la Segunda funcion");
}

//Manera de exportar multiples variables o funciones despues de declararlas sin necesidad de colocar la palabra reservada import despues del tipo de dato
export {ArrayNombres, OtroArrays, Fn1, Fn2};
//Manera de exportar una variable por default
export default ArrayNombres;

