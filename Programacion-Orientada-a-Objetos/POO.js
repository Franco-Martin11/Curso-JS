//POO
    /* Clases: Modelo a seguir 
    Objeto: Es una instancia de una clase (es  decir una copia de ese modelo o clase a seguir)
    Atributos: Caracteristicas o propiedad del objeto (variables dentro de un objeto)
    Métodos: Son acciones que un objeto puede realizar (los metodos son acciones dentro de un objeto)*/

//PROTOTIPOS
    /* Es un mecanismo donde un objeto puede heredar de un OBJETO PADRE(Prototipo) atributos y metodos */

    //Para crear este PROTOTIPO se necesita un FUNCIÓN CONSTRUCTORA

    //FUNCIÓN CONSTRUCTORA (Se escribe en UpperCamelCase)
    
    function Animal (nombre,genero){
        //Atributo
        this.nombre=nombre;
        this.genero=genero;
        //Método
        this.sonar=function(){
            console.log("respiro porque estoy vivo")
        }
    }

// Este PROTOTIPO llamado 'Animal' recibe 2 parametros y los convierte en un objeto 'Animal' con los atributos nombre y genero.

// Lo que te permiten los prototipos es generar objetos a partir de un modelo

const perro = new Animal("kira","hembra")

// Para generar un nueva instancia se tiene que declarar un variable y usar el metodo 'New' (permite crear una nueva instancia) y luego llamar a ese prototipo constructor ('Animal') otorgandole los parametros necesarios 

/*--------------------------------------*/

function lugar(nombre,localidad,calle,dirección){
    this.nombre=nombre
    this.calle=calle
    this.localidad=localidad
    this.dirección=dirección
}

    // Una buena practica para tener absoluto contros del prototipo es declarar los MÉTODOS fuera de la función constructora y luegos asignarlos a dicha funcion, con esto te aseguras que el MÉTODO no se multiplique cada vez que una instancia se cree. 

    lugar.prototype.Ubicacion=function(){
        console.log(`La ubicacion de ${this.nombre} es : ${this.calle} ${this.dirección} en la localidad de ${this.localidad}`)
    }

    // Ahora en lugar de multiplicar el MÉTODO en cada una de las nuevas instancias , lo que hacemos es que el MODELO/Func.Constructora 'lugar' tenga asignado el MÉTODO 'Ubicacion'.

    const franco= new lugar("franco","merlo","bach",3179)

    //  franco.Ubicacion()

    // console.log(franco)

    const prueba= ()=>{
        const arrPrueba = []
    for (let i = 0; i < 3; i++) {
        let nombre = prompt("dime tu nombre")
        let local = prompt("dime tu localidad")
        let calle = prompt("en que calle vives")
        let dirección = prompt("en que numeracion")

        const usuario = new lugar(nombre,local,calle,dirección)
        arrPrueba[i]=usuario
        usuario.Ubicacion()
    }        
    //-> console.log(arrPrueba)
    
    }
