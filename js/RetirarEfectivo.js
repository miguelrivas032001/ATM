function retirarEfectivo(monto) {
    // Obtener los saldos actuales del almacenamiento local
    const saldoAhorro = parseFloat(localStorage.getItem("saldoAhorro")) || 0;

    // Verificar si hay saldo suficiente para el retiro
    if (monto > saldoAhorro) {
        // Mostrar mensaje de transacción cancelada
        window.location.href = "FaltadeFondos.html";
        return;
    }

    // Restar el monto del saldo de ahorros
    const nuevoSaldoAhorro = saldoAhorro - monto;

    // Actualizar el saldo de ahorros en el almacenamiento local
    localStorage.setItem("saldoAhorro", nuevoSaldoAhorro.toFixed(2));

    // Redireccionar a la página deseada
    window.location.href = "ContandosuDinero.html";
}
