//* Operador Ternario

//? Este operador te permite abreviar un condicional de manera rapida y en  solo una linea

const ternarioVar = 2(ternarioVar !== 0) ? "Hola" : "Chau";

// En este caso si la variable 'ternarioVar' es diferente a 0 retorna 'hola' sino 'chau'

/*
* Ventajas
? Tiene un return explicito
? Simplifica un condicional

* Desventajas
? Se torna dificil de leer si se añida
*/


//* Spread Operator
//? Este operador se usa para concatenar de manera rapida 2:+ arrays/objetos

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [7, 8, 9, 10];

const nuevoArray = [...arr1, ...arr2];

//La ventaja de este metodo es que no muta los arrays iniciales sino que los copia y despues los une , por lo tanto los arrays default siguen estando con sus valores normales

//*REST operator

//? El operador REST se utiliza para dar un parametro indefinido , este operador convierte los datos en un array standard.

const rest = (a, b, ...c) => {};

rest(1, 2, 3, 4, 5, 6, 7);

// En este caso los argumentos RESTANTES se van a acumular en un array con el nombre 'c'


//* Destructuring

//? Se utiliza para aislar en variables independientes tanto elementos de un array como atributos/metodos de un objeto

const obj1 = {
  name: "franco",
  subname: "martin",
};

const { name, subname } = obj1;

// Ahora name y subname son variables independientes que no mutan el objeto inicial

//? Este metodo tambien se puede hacer con arrays

const arr3 = [1, 2, 3, 4];

const [primero, segundo, ...tercero] = arr3;

/*
*La variable independiente 
? primero[0]:1
? segundo [1]:2
? tercero[...2]:3,4 //! Este va a ser un array con los objetos restantes
*/
