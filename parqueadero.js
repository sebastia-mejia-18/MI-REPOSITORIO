// Función de inicio de sesión
function iniciarSesion() {
    const usuario = prompt("Ingrese su nombre de usuario:");
    const contraseña = prompt("Ingrese su contraseña:");
    // Aquí podrías implementar la validación de usuario y contraseña si es necesario
    console.log("Inicio de sesión exitoso.");
}

// Función para calcular el costo de estacionamiento
function calcularCosto(entrada, salida) {
    const horaEntrada = new Date(`1970-01-01T${entrada}:00`);
    const horaSalida = new Date(`1970-01-01T${salida}:00`);

    const diferenciaHoras = (horaSalida - horaEntrada) / (1000 * 60 * 60);
    let costo;

    if (diferenciaHoras <= 2) {
        costo = diferenciaHoras * 3000;
    } else if (diferenciaHoras <= 5) {
        costo = diferenciaHoras * 2500;
    } else {
        costo = diferenciaHoras * 2000;
    }

    return costo;
}

// Programa principal
iniciarSesion();

let continuar = true;
while (continuar) {
    const entrada = prompt("Ingrese la hora de entrada (formato HH:MM):");
    const salida = prompt("Ingrese la hora de salida (formato HH:MM):");
    const costo = calcularCosto(entrada, salida);

    console.log(`El costo de estacionamiento es: $${costo}`);

    continuar = prompt("¿Calcular el costo para otro vehículo? (si/no)") === "si";
}

console.log("Gracias por usar el sistema de estacionamiento.")