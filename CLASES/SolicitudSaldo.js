import Transaccion from "./Transiccion";

class SolicitudSaldo extends Transaccion {
    constructor(numeroCuentaUsuario, baseDeDatos) {
        super(numeroCuentaUsuario, baseDeDatos);
    }

    ejecutar() {
        const saldoDisponible = this.baseDeDatos.obtenerSaldoDisponible(this.obtenerNumeroCuenta());
        const saldoTotal = this.baseDeDatos.obtenerSaldoTotal(this.obtenerNumeroCuenta());

        return { type: 'success', msg: `Saldo disponible: $${saldoDisponible} - Saldo total: $${saldoTotal}` };
    }
}

export default SolicitudSaldo;