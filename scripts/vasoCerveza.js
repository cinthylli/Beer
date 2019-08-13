// De acuerdo al estudio realizado por Standford 
// https://web.stanford.edu/group/Zarelab/publinks/421.pdf

// radio de la burbuja no es constante
//radio = radioInicial + velociadad * t

let radioInicialEnCms = 0.018;
let radioActual;
const tasaIncrementoRadioBurbujaEnCmsPorSegundo = 0.004;
const tasaCreacionBurbujasEnMilisegundos = 540;


// ------------------------------------Funciones

function calcularRadioDeLaBurbujaEnElTiempo ( segundosDesdeNacimientoBurbuja) {
    let radio = radioInicialEnCms + (tasaIncrementoRadioBurbujaEnCmsPorSegundo * segundosDesdeNacimientoBurbuja);   
}

// ------------------------------------Funciones