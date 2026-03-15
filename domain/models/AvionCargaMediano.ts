import { AvionBase, AvionIdentidad } from "@/domain/models/AvionBase";

export class AvionCargaMediano extends AvionBase {
  constructor(identity: AvionIdentidad) {
    super({
      ...identity,
      nombreModelo: "CG-290 TitanCarrier",
      familia: "carga",
      tamano: "mediano",
      capacidad: "42 TONS",
      autonomiaKm: 5300,
    });
  }
}
