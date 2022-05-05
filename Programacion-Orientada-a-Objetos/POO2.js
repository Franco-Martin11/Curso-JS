// Prototipos: Clases ES6

// Desde el ES6 incluyeron una nueva caracteristica llamaDA 'Class', este nuevo recurso permite hacer un prototipo sin usar la sintaxis de una Funcion Constructora

//El metodo 'class' simplifica la forma de escribir un prototipo, sin embargo el resultado es el mismo con la diferencia que el metodo 'class' no multiplica los metodos por cada instancia nueva que se genere sino que los asigna directamente al prototipo. Esto es un gran ventaja porque optimiza mucho mas los procesos.

// La sintaxis basica de una clase es inicializar con la sentencia 'class', luego nombrar dicha sentencia , generar un bloque y utilizar el objeto 'constructor' el cual va a recibir por parametros el valor de las futuras instancia.
//Luego crear la instancia con el objeto 'this', darle un nombre y luego asignarle el valor (var:value) , el cual va a ser dado por el parametro del constructor.

class Raza {
  constructor(nombre, raza, genero) {
    this.raza = raza;
    this.genero = genero;
    this.nombre = nombre;
  }
  catalogo() {
    console.log(
      `el animal es de la raza ${this.raza}, de genero ${this.genero} y su nombre es ${this.nombre}`
    );
  }
}

// Para crear una nueva instancia se utiliza esta sentencia; crear una variable y asiganerle con el metodo 'new', la class (prototipo/modelo) creado anterior mente y pasarle los valores correspondientes mediante los parametros.

const Kira = new Raza("kira", "pitbull", "hembra");

//-> Kira.catalogo();

//-> console.log(Kira);

//<------HERENCIA PROTOPITICA------->//

// Para generar una herencia prototipica se necesita crear una nueva 'class' asignarle el nombre, con el metodo extends y el nombre de la 'class' a heredar.

// Luego escribir la sintaxis basica de las 'class' adicionando los parametros de la 'main-class'

class Tipo extends Raza {
  constructor(nombre, genero, raza, tipo) {

    // En el modelado de las instancias utilizar la sentencia 'super' para referenciar los parametros heredados de la 'main-class' y la sentencia 'this' con su (var:value) para el nuevo objeto de esta instancia.

    super(nombre, genero, raza);

    this.tipo = tipo;
  }

  catalogoTotal() {
    console.log(
      `el animal es de la raza ${this.raza}, de genero ${this.genero} y su nombre es ${this.nombre} y es de tipo ${this.tipo}`
    );
  }
}

const Tison = new Tipo("tison", "macho", "root-wailer", "perro");

//--> Tison.catalogoTotal();

//-> console.log(Tison);

//<--------------------EJEMPLO 2----------------------->//

class date {
  constructor(day, month) {
    this.day = day;
    this.month = month;
  }
  fecha() {
    console.log(`la fecha de hoy es ${this.day} del mes ${this.month}`);
  }
}

const NuevaFecha = new date(22, "abril");

//-> NuevaFecha.fecha();

//-> console.log(NuevaFecha);

class year extends date {
  constructor(day, month, year) {
    super(day, month);
    this.year = year;
  }
  fechaTotal() {
    console.log(
      `la fecha de hoy es ${this.day} del mes ${this.month} del año ${this.year}`
    );
  }
}

const nuevoAño = new year(22, 7, 1998);
//-> nuevoAño.fechaTotal();

//-> console.log(nuevoAño);
