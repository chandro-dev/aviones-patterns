import { Avion } from "@/domain/interfaces/Avion";
import { FamiliaAvion } from "@/domain/types/avionTypes";
import { generarIdentidadAvion } from "@/lib/aircraftIdentity";

export abstract class FabricaAvion {
  protected crearIdentidad(familia: FamiliaAvion) {
    const prefix = familia === "comercial" ? "AP" : "CG";
    return generarIdentidadAvion(prefix);
  }

  public abstract crearAvion(familia: FamiliaAvion): Avion;
}
