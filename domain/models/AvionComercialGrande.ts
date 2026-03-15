import { AvionBase, AvionIdentidad } from "@/domain/models/AvionBase";

export class AvionComercialGrande extends AvionBase {
  constructor(identity: AvionIdentidad) {
    super({
      ...identity,
      nombreModelo: "AP-742 Skyliner",
      familia: "comercial",
      tamano: "grande",
      capacidad: "320 PAX",
      autonomiaKm: 8400,
    });
  }
}
