// <----- Metodos estaticos ------>

// Un metodo  estatico es aquel que se puede ejecutar sin crear una nueva instancia basado en el prototipo.

class Perro {
  constructor(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
  }
  // Su sintaxis es identica a cualquier otro metodo de un objeto con la diferencia que se declara el tipo , en este caso 'static'
  static staticFunc() {
    console.log("esto es una prueba");
  }
}
const kira = new Perro("kira", "pitbul");
console.log(kira);
Perro.staticFunc();

//<------Metodos Getters y Setters-------->

class Humano {
  constructor(nombre, altura) {
    this.nombre = nombre;
    this.altura = altura;
    this.edad = null;
  }

  //-> Getter : Metodo obtenedor
  get getEdad() {
    return this.edad;
  }
  //-> Setter : Metodo colocador
  set setEdad(edad) {
    this.edad = edad;
  }
}

const franco1 = new Humano("franco", 1.78);
console.log(franco1);

franco1.setEdad = 23;

console.log(franco1);
