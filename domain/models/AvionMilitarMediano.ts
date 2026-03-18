import { AvionBase, AvionIdentidad } from "@/domain/models/AvionBase";

export class AvionMilitarMediano extends AvionBase {
  constructor(identity: AvionIdentidad) {
    super({
      ...identity,
      nombreModelo: "AP-108 Atlas",
      familia: "militar",
      tamano: "mediano",
      capacidad: "220 PAX",
      autonomiaKm: 6200,
    });
  }
  
  
}
