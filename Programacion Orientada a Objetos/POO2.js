// Prototipos: Clases ES6

// Desde el ES6 incluyeron una nueva caracteristica que se llama 'Class', este nuevo recurso permite hacer un prototipo sin usar la sintaxis de una Funcion Constructora

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

NuevaFecha.fecha();

console.log(NuevaFecha);

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
nuevoAño.fechaTotal();

console.log(nuevoAño)