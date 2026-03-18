import { AvionBase, AvionIdentidad } from "@/domain/models/AvionBase";

export class AvionMilitarPequeno extends AvionBase {
  constructor(identity: AvionIdentidad) {
    super({
      ...identity,
      nombreModelo: "AP-108 Atlas",
      familia: "militar",
      tamano: "pequeno",
      capacidad: "220 PAX",
      autonomiaKm: 6200,
    });
  }
}
