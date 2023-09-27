class Cuenta {
    constructor(numeroCuenta, nip, saldoDisponible, saldoTotal) {
        this.numeroCuenta = numeroCuenta;
        this.nip = nip;
        this.saldoDisponible = saldoDisponible;
        this.saldoTotal = saldoTotal;
    }

    validarNIP(nipUsuario) {
        if (nipUsuario == this.nip) {
            return true;
        } else {
            return false;
        }
    }

    obtenerSaldoDisponible() {
        return this.saldoDisponible;
    }

    obtenerSaldoTotal() {
        return this.saldoTotal;
    }

    obtenerNumeroCuenta() {
        return this.numeroCuenta;
    }

    abonar(monto) {
        this.saldoTotal += monto;
    }

    cargar(monto) {
        this.saldoDisponible -= monto;
        this.saldoTotal -= monto;
    }
}

export default Cuenta;