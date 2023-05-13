class Persona {
	nombre: string;
	edad: number;
	profesion: string;

	constructor(nombre: string, edad: number, profesion: string) {
		this.nombre = nombre;
		this.edad = edad;
		this.profesion = profesion;
	}

	//metodos
	hablar(mensaje: string): void {
		console.log(`${this.nombre} dice: ${mensaje}`);
	}

	caminar(distancia: number): void {
		console.log(`${this.nombre} caminó ${distancia} metros.`);
	}
}

// Crear una nueva persona
const juan = new Persona("Juan", 25, "Ingeniero");
const thomas = new Persona("Thomas", 21, "Programador");

// Acceder a sus atributos
console.log(juan.nombre); // "Juan"
console.log(juan.edad); // 25

console.log(thomas.nombre);
console.log(thomas.edad);
console.log(thomas.profesion);

// Llamar a sus métodos
juan.hablar("Hola!"); // "Juan dice: Hola!"
juan.caminar(10); // "Juan caminó 10 metros."

thomas.hablar("Buenas");
thomas.caminar(25);
