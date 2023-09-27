import Transaccion from "./Transiccion";

class Deposito extends Transaccion {
    constructor(numeroCuentaUsuario, baseDeDatos, ranuraDeposito) {
        super(numeroCuentaUsuario, baseDeDatos);
        this.ranuraDeposito = ranuraDeposito;
    }

    ejecutar(monto) {
        let baseDatosBanco = this.obtenerBaseDeDatos();

        let seRecibioSobre = this.ranuraDeposito.seRecibioSobre();

        if (seRecibioSobre) {
            baseDatosBanco.abonar(this.obtenerNumeroCuenta(), monto);
            return {
                type: 'success',
                msg: 'Se recibió su sobre de deposito. NOTA: El dinero que se acaba de depositar no estará disponible sino hasta que verifiquemos el monto del efectivo.'
            }
        } else {
            return { type: 'failure', msg: 'El ATM ha cancelado su transacción.' }
        }
    }
}

export default Deposito;