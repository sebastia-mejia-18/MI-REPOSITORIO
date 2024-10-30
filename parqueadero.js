// Función de inicio de sesión
function iniciarSesion() {
    const usuario = document.getElementById("username").value;
    const contraseña = document.getElementById("password").value;

    if (usuario && contraseña) {
        console.log("Inicio de sesión exitoso.");
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("parkingSection").style.display = "block";
    } else {
        console.error("Error: Usuario o contraseña inválidos.");
        alert("Por favor, ingrese un nombre de usuario y una contraseña válidos.");
    }
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

// Configurando eventos de botones
document.getElementById("loginButton").addEventListener("click", iniciarSesion);
document.getElementById("calculateButton").addEventListener("click", function() {
    const entrada = document.getElementById("entrada").value;
    const salida = document.getElementById("salida").value;

    if (!entrada.match(/^\d{2}:\d{2}$/) || !salida.match(/^\d{2}:\d{2}$/)) {
        alert("Error: Formato de hora inválido. Use HH:MM.");
        return;
    }

    const costo = calcularCosto(entrada, salida);
    document.getElementById("result").textContent = `El costo de estacionamiento es: $${costo.toFixed(2)}`;
    document.getElementById("anotherVehicleButton").style.display = "block";
});

document.getElementById("anotherVehicleButton").addEventListener("click", function() {
    document.getElementById("entrada").value = '';
    document.getElementById("salida").value = '';
    document.getElementById("result").textContent = '';
});
