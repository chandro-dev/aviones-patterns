import { FabricaAvion } from "@/domain/factories/factory-method/FabricaAvion";
import { Avion } from "@/domain/interfaces/Avion";
import { AvionCargaMediano } from "@/domain/models/AvionCargaMediano";
import { AvionComercialMediano } from "@/domain/models/AvionComercialMediano";
import { FamiliaAvion } from "@/domain/types/avionTypes";

export class FabricaAvionMediano extends FabricaAvion {
  public crearAvion(familia: FamiliaAvion): Avion {
    const identity = this.crearIdentidad(familia);

    if (familia === "comercial") {
      return new AvionComercialMediano(identity);
    }

    return new AvionCargaMediano(identity);
  }
}
