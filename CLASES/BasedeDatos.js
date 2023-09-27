import Cuenta from "../CLASES/Cuenta";

class BaseDeDatos {
    constructor() {
        this.cuentas = [];
        this.cuentas[0] = new Cuenta(10001, 12345, 1000, 1200);
        this.cuentas[1] = new Cuenta(10002, 54321, 200, 200);
        this.cuentas[2] = new Cuenta(10003, 11111, 1000000, 10000000);
    }

    obtenerCuenta(numeroCuenta) {
        let cuenta = null;
        this.cuentas.forEach((cta) => {
            if (cta.numeroCuenta == numeroCuenta) {
                cuenta = cta;
                return;
            }
        });
        return cuenta;
    }

    autenticarUsuario(numeroCuentaUsuario, nipUsuario) {
        let cuentaUsuario = this.obtenerCuenta(numeroCuentaUsuario);
        if (cuentaUsuario != null) {
            return cuentaUsuario.validarNIP(nipUsuario);
        } else {
            return false;
        }
    }

    obtenerSaldoDisponible(numeroCuentaUsuario) {
        return this.obtenerCuenta(numeroCuentaUsuario).obtenerSaldoDisponible();
    }

    obtenerSaldoTotal(numeroCuentaUsuario) {
        return this.obtenerCuenta(numeroCuentaUsuario).obtenerSaldoTotal();
    }

    abonar(numeroCuentaUsuario, monto) {
        this.obtenerCuenta(numeroCuentaUsuario).abonar(monto);
    }

    cargar(numeroCuentaUsuario, monto) {
        this.obtenerCuenta(numeroCuentaUsuario).cargar(monto);
    }
}

export default BaseDeDatos;