//* Los 2 metodos mas usados para interactuar con DOM son:

//? getElementByID
//? querySelector
//? querySelectorAll

//* Cuando se guarda un elemento DOM en una variable se declara con el simbolo $ antes del nombre

const $urlDom = document.querySelector(".link");
console.log($urlDom);

//* Con el metodo .getAttribute para que retorne el valor
//* Con el metodo .setAttribute se pueden agregar atributos a la etiqueta html
//* Se pueden eliminar con el .removeAttribute

$urlDom.setAttribute("target", "__blank");

