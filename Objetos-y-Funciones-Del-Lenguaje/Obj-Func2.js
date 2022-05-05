// Objeto Math

//Este objeto provee a js metodos para operaciones complejas por ejemplo potenciar un numero o la raiz de un numero , etc.

let numero1 = 22.4;
//Redondea para arriba.
console.log(Math.ceil(numero1));
//Redondea para abajo.
console.log(Math.floor(numero1));
//Redondea depende el numero periodico.
console.log(Math.round(numero1));
//Verifica si el numero es positivo y negativo. Retorna 0 en caso de ser numNeutro,-1 en caso de ser numNegativo y 1 en caso de ser numPositivo.
console.log(Math.sign(numero1));

//Funcion de potencia , recibe el numero base y luego el exponenete en formato (x,y).
console.log(Math.pow(numero1, 2));
//Funcion de raiz, recibe numero base y luego la raiz en formato (x,y).
console.log(Math.sqrt(numero1, 2));

//Esta funcion da un numero aleatorio entre 0 y 1

console.log(Math.random() * 1000);

let numeroRandom = Math.random() * 100;

numeroRandom = Math.round(numeroRandom);

console.log(numeroRandom);

//Eliminar el console.clear() para ver la ejecucion del codigo
console.clear();

//Operador cortocircuito || o &&

//Cuando se usa el || , si el valor tiende a negativo (falsy) va a ejecutar la instruccion de la derecha

//Falsy : null,undefined,0,"",false

function saludar(nombre) {
  nombre = nombre || "desconocido";
  console.log(`hola ${nombre}`);
}

saludar();

//En cambio cuando se usa el && si el valor tiende a positivo va ejecutar la sentencia de la derecha

//Truty : string,numbre,true,objet

function saludar2(nombre) {
  nombre = nombre && "desconocido";
  console.log(`hola ${nombre}`);
}

saludar2("asd");

//<----Parametro por defecto---->
// En caso de que no se ingrese un parametro en una funcion se puede poner por defecto uno.

let resultado = 0;

//En este caso si se llama a la funcion y no se le da un parametro tomara el paramatro por defecto que definimos (10).

function suma(adicion = 10) {
  resultado = adicion * 5;
  return resultado;
}

suma();

console.log(resultado);

//Eliminar el console.clear() para ver la ejecucion del codigo
console.clear();

//<----Objetos relacionados a window----->

//Esta en un bloque de funcion para que no se ejecute sin ser llamada

function ejecucionWindow() {
  let aviso = alert("esto es una alerta");
  let comfirmacion = confirm("esto es una confirmacion");

  //Prompt retorna la entrada en formato de string.
  let entradaDeDato = prompt("esto es una ventana de entrada");
}
