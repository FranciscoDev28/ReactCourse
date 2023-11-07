//importando variable del archivo export.js
//const ArrayExportada = require('./export.js');


//Nueva manera de exportar variables (Si no se trabaja con un package.json se debe colocar el tipo de archivo [js,css,html])
// Al usar los {} permite selecionar variable que se deseen importar del archivo selecionado
import ArrayExportada, { ArrayEstadosAnimo, OtroArrays, Fn1, Fn2 } from './export.mjs'
console.log(ArrayExportada, ArrayEstadosAnimo, OtroArrays);

//Se llaman a las funciones
Fn1();
Fn2();

