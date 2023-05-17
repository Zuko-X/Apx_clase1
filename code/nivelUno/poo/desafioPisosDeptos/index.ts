// crear las clases Edificio, Piso y Departamento aquí
class Departamento {
	departamento: string;

	constructor(departamento: string) {
		this.departamento = departamento;
	}
	getName() {
		return this.departamento;
	}
}

class Piso {
	nombre: string;
	deapartamentos: Departamento[];

	constructor(nombrePiso: string) {
		this.nombre = nombrePiso;
		this.deapartamentos = [];
	}

	pushDepartamento(departamento: Departamento) {
		this.deapartamentos.push(departamento);
	}
	getDepartamento() {
		return this.deapartamentos;
	}
}

class Edificio {
	pisos: Piso[];

	constructor(pisos: Piso[]) {
		this.pisos = pisos;
	}

	addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
		const pisoEncontrado = this.pisos.find(
			(piso) => piso.nombre === nombreDePiso
		);
		if (pisoEncontrado) {
			pisoEncontrado.pushDepartamento(departamento);
		} else {
			console.log("El piso no existe.");
		}
	}

	getDepartamentosByPiso(nombreDePiso: string) {
		const pisoEncontrado = this.pisos.find(
			(piso) => piso.nombre === nombreDePiso
		);
		if (pisoEncontrado) {
			return pisoEncontrado.getDepartamento();
		} else {
			return [];
		}
	}
}

// no modificar este test
function testClaseEdificio() {
	const unPiso = new Piso("planta baja");
	const otroPiso = new Piso("primer piso");
	const unEdificio = new Edificio([unPiso, otroPiso]);
	const deptoUno = new Departamento("depto uno");
	const deptoDos = new Departamento("depto dos");
	const deptoTres = new Departamento("depto tres");
	unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
	unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
	unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

	const deptos = unEdificio.getDepartamentosByPiso("planta baja");
	const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

	if (
		Array.isArray(deptosEmpty) &&
		deptosEmpty.length === 0 &&
		deptos.length === 3 &&
		deptos[2].getName() === "depto tres"
	) {
		console.log("testClaseEdificio passed");
	} else {
		throw "testClaseEdificio not passed";
	}
}

function main() {
	testClaseEdificio();
}

main();
