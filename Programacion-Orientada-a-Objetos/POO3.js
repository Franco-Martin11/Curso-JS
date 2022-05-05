// <------ Metodos estaticos ------>

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
//console.log(kira);

//Perro.staticFunc();

//<------Metodos Getters y Setters-------->

class Humano {
  constructor(nombre, altura) {
    this.nombre = nombre;
    this.altura = altura;
    this.edad = null;
    this.colorDePelo = null;
  }

  //-> Getter : Metodo obtenedor
  get getGetter() {
    return this.edad, this.colorDePelo;
  }

  // La funcion del getter es enlazar los nuevos valores dados por el setter, retornalos a la instanacia principal y ubicarlos en el valor de los atributos correspondientes.

  //-> Setter : Metodo colocador
  set setEdad(edad) {
    this.edad = edad;
  }

  //La funcion del setter es obtener los valores correspondientes a los atributos de dicha instancia.

  set setColorDePelo(colorDePelo) {
    this.colorDePelo = colorDePelo;
  }
}

const franco1 = new Humano("franco", 1.78);
//console.log(franco1);

// Los valores de los metodos 'get'y 'set' se expresan en forma de (var:value) como si se tratara de un atributo del objeto.

franco1.setEdad = 23;

//console.log(franco1);

franco1.colorDePelo = "azul";

//console.log(franco1);
