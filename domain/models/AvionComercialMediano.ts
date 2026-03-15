import { AvionBase, AvionIdentidad } from "@/domain/models/AvionBase";

export class AvionComercialMediano extends AvionBase {
  constructor(identity: AvionIdentidad) {
    super({
      ...identity,
      nombreModelo: "AP-108 Atlas",
      familia: "comercial",
      tamano: "mediano",
      capacidad: "220 PAX",
      autonomiaKm: 6200,
    });
  }
}
