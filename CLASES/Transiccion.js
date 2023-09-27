class Transaccion {
    constructor(numeroCuentaUsuario, baseDeDatos) {
        this.numeroCuentaUsuario = numeroCuentaUsuario;
        this.baseDeDatos = baseDeDatos;
    }

    obtenerNumeroCuenta() {
        return this.numeroCuentaUsuario;
    }

    obtenerBaseDeDatos() {
        return this.baseDeDatos;
    }

    ejecutar() {
    }
}

export default Transaccion;