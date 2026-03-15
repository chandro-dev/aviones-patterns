import { AvionBase, AvionIdentidad } from "@/domain/models/AvionBase";

export class AvionCargaPequeno extends AvionBase {
  constructor(identity: AvionIdentidad) {
    super({
      ...identity,
      nombreModelo: "CG-118 AtlasFreight",
      familia: "carga",
      tamano: "pequeno",
      capacidad: "18 TONS",
      autonomiaKm: 3500,
    });
  }
}
