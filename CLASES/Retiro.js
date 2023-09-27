import Transaccion from "./Transiccion";

class Retiro extends Transaccion {
    constructor(numeroCuentaUsuario, baseDeDatos, dispensadorEfectivo) {
        super(numeroCuentaUsuario, baseDeDatos);
        this.dispensadorEfectivo = dispensadorEfectivo;
    }

    ejecutar(monto) {
        let baseDatosBanco = this.obtenerBaseDeDatos();
        let saldoDisponible = baseDatosBanco.obtenerSaldoDisponible(this.obtenerNumeroCuenta());

        if (monto <= saldoDisponible) {
            if (this.dispensadorEfectivo.haySuficienteEfectivoDisponible(monto)) {
                baseDatosBanco.cargar(this.obtenerNumeroCuenta(), monto);
                this.dispensadorEfectivo.dispensarEfectivo(monto);
                return { type: 'success', msg: 'Se dispenso su efectivo, tómelo ahora.' }
            } else {
                return { type: 'failure', msg: 'No hay suficiente efectivo en el ATM. Seleccione un monto menor.' }
            }
        } else {
            return { type: 'failure', msg: 'No hay suficiente fondos en su cuenta. Seleccione un monto menor.' }
        }
    }
}

export default Retiro;