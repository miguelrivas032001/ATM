function depositarAhorro() {
    const depositoInput = document.getElementById("DEPOSITO");
    const deposito = parseFloat(depositoInput.value);
    if (isNaN(deposito) || deposito <= 0) {
        mostrarMensaje("Ingrese un monto válido.");
        return;
    }

    // Obtener el saldo actual del almacenamiento local
    const saldoAhorro = parseFloat(localStorage.getItem("saldoAhorro")) || 0;
    const nuevoSaldo = saldoAhorro + deposito;

    // Actualizar el saldo en el almacenamiento local
    localStorage.setItem("saldoAhorro", nuevoSaldo);

    mostrarMensaje(`Se depositaron $${deposito.toFixed(2)} en Cuenta de Ahorros.`);
    depositoInput.value = "";
    
    setTimeout(function(){
        window.location.href = "transaccionExitosa.html";
    }, 1500);
}


function mostrarMensaje(mensaje) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = mensaje;
}
