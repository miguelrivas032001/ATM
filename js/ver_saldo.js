document.addEventListener("DOMContentLoaded", function() {
    // Obtener los saldos del almacenamiento local
    const saldoAhorro = parseFloat(localStorage.getItem("saldoAhorro")) || 0;

    // Mostrar los saldos en los campos de texto
    const saldoAhorroInput = document.getElementById("SALDOAHORRO");
    saldoAhorroInput.value = saldoAhorro.toFixed(2);

});
