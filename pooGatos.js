class gato{
    nombre = "";
    edad = 0;
    raza = "";
    caracter = "";

    constructor(nombre,edad,caracter,raza){
        this.nombre = nombre;
        this.edad = edad;
        this.caracter = caracter;
        this.raza = raza;
    }

    maullar(){
        console.log("Miau");
    }
    dormir(){
        console.log("Zzzzz");
    }
    ronronear(){
        console.log("Purrrr");
    }

};

var Octocat = new gato ("Octocat", 8, "programador", "Gato pulpo");
var AntonioBanderas = new gato ("Antonio Banderas", 18, "Audaz", "Gato con botas");
var BolaDeNieve = new gato ("Bola de nieve", 5, "Intrigante", "Siamés");
var Garfield = new gato ("Garfield", 5, "Tranquilo", "Exótico");
var Felix = new gato ("Félix", 2, "Feliz", "Siamés");

console.log(Octocat);
console.log(AntonioBanderas);
console.log(BolaDeNieve);
console.log(Garfield);
console.log(Felix);