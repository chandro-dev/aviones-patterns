import { AvionBase, AvionIdentidad } from "@/domain/models/AvionBase";

export class AvionCargaGrande extends AvionBase {
  constructor(identity: AvionIdentidad) {
    super({
      ...identity,
      nombreModelo: "CG-610 MammothLift",
      familia: "carga",
      tamano: "grande",
      capacidad: "85 TONS",
      autonomiaKm: 6900,
    });
  }
}
