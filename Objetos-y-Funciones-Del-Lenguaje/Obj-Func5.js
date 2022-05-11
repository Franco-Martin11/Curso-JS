//* Modulos (Import/Export)

//! Es muy importante que las etiqueta 'script(html)' tenga el atributo (type='module') para que se habilitar los modulos ES6 (export/import)

// <script src='x.js' type='module'>

//Para importar un archivo js se debe hacer de esta manera
//? ./ = busca apartir la carpeta donde estoy

//* import {} from './archivo.js'

//todo: Se puede exportar/importar cualquier estructura de dato (objetos,variables, arrays , funciones,etc.)

//*<----------------------------------------->*//

//* Dos maneras de exportar codigo desde otros archivos.

export const nombre = "franco";

//? Si se quiere exportar por default una const se debe declarar la varialble y en la linea siguiente llamar el metodo 'export default'

export default function name2222(asd) {
  return console.log(asd);
}
//? Las unicas estructuras que permiten el export default escrito en linea son las funciones declaradas y las clases

//! Todo lo que no se manda a exportar por default se tiene que destructurar por eso se utiliza esta sentencia (import{xx} from './archivo.js')
