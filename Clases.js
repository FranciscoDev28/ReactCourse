//Expresion de clase  (Se puede crear de manera donde se expecifique la clase 
//o solo con la palabra reservada class funcionaria, pero se le conoceria como anonima) 

// const Rectangulo = class R{
// };


//Declaracion de clase que se utilice con la palabra reservada class
//no contienen hoisting
class Rectangulo{

}


//Hoisting
// y esto es cuando tomamos varibales definidas con var
// y funciones definidas con function
// y las lleva al comienzo del archivo
//console.log(Cuadrado);
function Cuadrado(){}
//console.log(Cuadrado, Rectangulo);

const r = new Rectangulo();

//Siempre que se instancie una clase se va a mandar a llamar a la funcion constructor
class Clase {
    constructor(estado){
        console.log(`Clase ${estado} :`);
    }
}

const ClaseFeliz = new Clase('Feliz');
const ClaseTriste = new Clase('Triste');

