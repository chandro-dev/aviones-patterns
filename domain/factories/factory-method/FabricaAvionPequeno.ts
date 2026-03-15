import { FabricaAvion } from "@/domain/factories/factory-method/FabricaAvion";
import { Avion } from "@/domain/interfaces/Avion";
import { AvionCargaPequeno } from "@/domain/models/AvionCargaPequeno";
import { AvionComercialPequeno } from "@/domain/models/AvionComercialPequeno";
import { FamiliaAvion } from "@/domain/types/avionTypes";

export class FabricaAvionPequeno extends FabricaAvion {
  public crearAvion(familia: FamiliaAvion): Avion {
    const identity = this.crearIdentidad(familia);

    if (familia === "comercial") {
      return new AvionComercialPequeno(identity);
    }

    return new AvionCargaPequeno(identity);
  }
}
