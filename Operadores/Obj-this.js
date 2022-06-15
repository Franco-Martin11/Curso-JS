//* Objeto THIS

//? Este keyword hace referencial con contexto de algo en especifico
// This en los navegadores hace referencia al contexto global que es el Obj.windows

const ObjetoPrueba = {
  name: "franco",
  apellido: "martin",
  imprimir() {
    console.log(this.name);
  },
};

//* Esto se traduce a un metodo (imprimir) que imprime por pantalla el KEY 'name' que se debe encontrar en el contexto donde se define el metodo

/*
* Hay que tener en claro el contexto donde se hace referencia this
? Tanto las {} como las funciones y archivos generan un contexto
! Hay una excepcion que son las funciones flecha que no generan  contexto sino que toma el contexto del padre (en caso de que no haya tomara el contexto global)
*/

const contextoGlobal = () => console.log(this);

/*
* Closure
? En el caso de los closure ya que es una funcion dentro de otra tomara el contexto de 'Closure' y no de primary 
*/

class Personas2 {
  constructor(nombre) {
    this.nombre = nombre;

    return function () {
      console.log(this.nombre);
    };
  }
}

const francoPrueba = new Personas2("esto es una prueba");
francoPrueba();

//* Sin embargo al no generar un contexto sino heredarlo las arrow function podrian tomar el contexto this donde se encuentra la KEY 'nombre'

//Si das hover en this VSC va a resaltar a que hace referencia

class Personas3 {
  constructor(nombre) {
    this.nombre = nombre;

    return () => {
      console.log(this.nombre);
    };
  }
}

const francoPrueba1 = new Personas3("esto es una prueba");
francoPrueba1();

//* Los clousures se componen de esta manera

function iniciar() {
  const nombre = "Mozilla"; // La variable nombre es una variable local creada por iniciar.

  function mostrarNombre() {
    // La función mostrarNombre es una función interna, una clausura.
    alert(nombre); // Usa una variable declarada en la función externa.
  }

  mostrarNombre();
}
iniciar();

//? Una funcion closure se compone del clousure (funcion principal) y luego las funciones internas


