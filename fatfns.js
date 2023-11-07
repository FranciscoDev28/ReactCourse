//Funciones que se declaran usando la palabra 'function', este si contiene un contexto donde se utiliza this
function Fn(){
    //{  prop: 'Propiedad'   }

    this.prop = 'Propiedad';

    //return 'SpideyCerdo';
}

Fn.prototype.NombreFuncion = function FuncionDePrueba() {
    //{console.log("Si jala");}
}

const r = new Fn();
//const r = Fn();

//Acceder al prototype de la variable con la funcion 'NOMREVARIABLE.__proto_'
//console.log(r.__proto__);
//Acceder a la propiedad
//r.NombreFuncion();

// Fat arrow function

console.log(this);
const fatFN = () => { //No contiene contexto de this
    this.prop = 'lala'
}

const r1 = fatFN();

console.log(r1);