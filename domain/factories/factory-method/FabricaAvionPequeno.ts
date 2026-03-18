import { FabricaAvion } from "@/domain/factories/factory-method/FabricaAvion";
import { Avion } from "@/domain/interfaces/Avion";
import { FamiliaAvion } from "@/domain/types/avionTypes";

export class FabricaAvionPequeno extends FabricaAvion {
  public crearAvion(familia: FamiliaAvion): Avion {
    return this.construirAvion(familia, "pequeno");
  }
}
