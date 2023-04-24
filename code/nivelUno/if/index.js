let aspiranteABeca = {
    nombre: "Marcos",
    ingresos: 90000,
    hermanosEnElColegio: 2,
    KmDistanciaAlColegio: 4, 
    becaCompleta: false,
    mediaBeca: false,
    puntos: 0,
};

aspiranteABeca.puntos = aspiranteABeca.KmDistanciaAlColegio + aspiranteABeca.hermanosEnElColegio - aspiranteABeca.ingresos/20000

if (aspiranteABeca.puntos >= 7){
    console.log(aspiranteABeca.nombre + " tiene acceso al 100% de la beca.");
    aspiranteABeca.becaCompleta = true;
}
else if(aspiranteABeca.puntos < 4){
    console.log(aspiranteABeca.nombre + " no es apto para la beca.");
}
else {
    console.log(aspiranteABeca.nombre + " tiene acceso al 50% de la beca.");
    aspiranteABeca.mediaBeca = true;
}