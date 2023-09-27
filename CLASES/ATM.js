import BaseDeDatos from '../CLASES/BasedeDatos';
import Deposito from "../CLASES/Deposito";
import DispensadorEfectivo from "../CLASES/DispensadorEfectivo";
import RanuraDeposito from "../CLASES/RanuraDeposito";
import Retiro from "../CLASES/Retiro";
import SolicitudSaldo from "../CLASES/SolicitudSaldo";
import Transaccion from "./Transiccion";

const SOLICITUD_SALDO = 1;
const RETIRO = 2;
const DEPOSITO = 3;
const SALIR = 4;

class ATM {
    constructor() {
        this.usuarioAutenticado = false;
        this.numeroCuentaActual = 0;
        this.dispensadorEfectivo = new DispensadorEfectivo();
        this.ranuraDeposito = new RanuraDeposito();
        this.baseDeDatos = new BaseDeDatos();
    }

    run(numeroCuenta, nip) {
        this.autenticarUsuario(numeroCuenta, nip);
    }

    autenticarUsuario(numeroCuenta, nip) {
      this.usuarioAutenticado = this.baseDeDatos.autenticarUsuario(numeroCuenta, nip);
    
      if (this.usuarioAutenticado) {
        this.numeroCuentaActual = numeroCuenta;
      } else {
        return { type: 'failure', msg: 'Número de cuenta o NIP inválido. Intente de nuevo.' };
      }
    }
    
    

    realizarTransacciones(tipoTransaccion, monto) {
        let transaccionActual = new Transaccion();
        switch (tipoTransaccion) {
            case SOLICITUD_SALDO:
                transaccionActual = new SolicitudSaldo(this.numeroCuentaActual, this.baseDeDatos);
                return transaccionActual.ejecutar();
            case RETIRO:
                transaccionActual = new Retiro(this.numeroCuentaActual, this.baseDeDatos, this.dispensadorEfectivo);
                return transaccionActual.ejecutar(monto);
            case DEPOSITO:
                transaccionActual = new Deposito(this.numeroCuentaActual, this.baseDeDatos, this.ranuraDeposito);
                return transaccionActual.ejecutar(monto);
            case SALIR:
                this.usuarioAutenticado = false;
                this.numeroCuentaActual = 0;
                return {
                    type: 'success',
                    msg: 'Cerrando sesión.'
                }
        }

    }
}

export default ATM;