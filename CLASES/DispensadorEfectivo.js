const CUENTA_INICIAL = 500;

class DispensadorEfectivo {
    constructor() {
        this.cuenta = CUENTA_INICIAL;
    }

    dispensarEfectivo(monto) {
        let billetesRequeridos = monto / 20;
        this.cuenta -= billetesRequeridos;
    }

    haySuficienteEfectivoDisponible(monto) {
        let billetesRequeridos = monto / 20;
        if (this.cuenta >= billetesRequeridos) {
            return true;
        } else {
            return false;
        }
    }
}

export default DispensadorEfectivo;