import { AvionBase, AvionIdentidad } from "@/domain/models/AvionBase";
import { EstadoAvion, FamiliaAvion, TamanoAvion } from "@/domain/types/avionTypes";

export type AvionEnsambladoConfig = AvionIdentidad & {
  nombreModelo: string;
  familia: FamiliaAvion;
  tamano: TamanoAvion;
  capacidadPasajeros: number;
  autonomiaKm: number;
  motores: number;
  color: string;
  estado: EstadoAvion;
};

export class AvionEnsamblado extends AvionBase {
  public readonly motores: number;
  public readonly color: string;

  constructor(config: AvionEnsambladoConfig) {
    super({
      id: config.id,
      codigoVuelo: config.codigoVuelo,
      nombreModelo: config.nombreModelo,
      familia: config.familia,
      tamano: config.tamano,
      capacidad: `${config.capacidadPasajeros} PAX`,
      autonomiaKm: config.autonomiaKm,
    });

    this.motores = config.motores;
    this.color = config.color;
    this.estadoActual = config.estado;
  }

  public override obtenerInformacion(): string {
    return `${super.obtenerInformacion()} | motores ${this.motores} | color ${this.color}`;
  }
}

