import { AvionBase, AvionIdentidad } from "@/domain/models/AvionBase";

export class AvionComercialPequeno extends AvionBase {
  constructor(identity: AvionIdentidad) {
    super({
      ...identity,
      nombreModelo: "AP-052 Sparrow",
      familia: "comercial",
      tamano: "pequeno",
      capacidad: "120 PAX",
      autonomiaKm: 3800,
    });
  }
}
