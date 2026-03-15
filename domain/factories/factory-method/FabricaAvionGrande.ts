import { FabricaAvion } from "@/domain/factories/factory-method/FabricaAvion";
import { Avion } from "@/domain/interfaces/Avion";
import { AvionCargaGrande } from "@/domain/models/AvionCargaGrande";
import { AvionComercialGrande } from "@/domain/models/AvionComercialGrande";
import { FamiliaAvion } from "@/domain/types/avionTypes";

export class FabricaAvionGrande extends FabricaAvion {
  public crearAvion(familia: FamiliaAvion): Avion {
    const identity = this.crearIdentidad(familia);

    if (familia === "comercial") {
      return new AvionComercialGrande(identity);
    }

    return new AvionCargaGrande(identity);
  }
}
