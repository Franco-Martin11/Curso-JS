/*
let texto =
  "esto es una prueba para ver si esto funciona de la manera correcta";

const hablar = (txt) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(txt));
};

hablar(texto);
*/

//* DOM : Document Objet Model (Api)

/*
 * El dom se basa en una raiz con diferentes nodos.
 ? en especifico la raiz es el objeto Document y los nodos 
 ? por ej 'Document.header'.

 Estos nodos se pueden llamar colecciones y hay muchas con diferentes informacion
 Document.form
 Document.images
 Document.links
 Etc.
 */

//* Metodos para acceder a los elementos HTML

/*
Document
=> Estan en desuso
.getElementsByClass
.getElementsByName
.getElementsByTagName
=>Estan en uso

*Desde el nuevo estandar los metodos que se usan son

° querySelector return una estructura de nodo (nodelist)

* .querySelector("#menu") /Se puede buscar cualquier elemento y solo retornara el primer elemento que especifiques en el parametro/

* .querySelectorAll("#menu") /En cambio este va a retornar todos los elementos que encuentre/

° getElement retorna una collecion HTML

* .getElementsByID (A nivel de rendimiento es mas rapido que el query selector porque no hace falta que valide el tipo y el name)

*/

//* Query selector permite usar indice tipo array para seleccionar un elemento en especifico

console.log(document.querySelectorAll(".card")[2]);

