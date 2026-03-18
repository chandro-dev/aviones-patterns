import { AvionCargaBuilder } from "@/domain/builders/AvionCargaBuilder";
import { AvionComercialBuilder } from "@/domain/builders/AvionComercialBuilder";
import { AvionMilitarBuilder } from "@/domain/builders/AvionMilitarBuilder";
import { Avion } from "@/domain/interfaces/Avion";
import { FamiliaAvion, TamanoAvion } from "@/domain/types/avionTypes";
import { generarIdentidadAvion } from "@/lib/aircraftIdentity";

export abstract class FabricaAvion {
  protected crearIdentidad(familia: FamiliaAvion) {
    const prefix = familia === "comercial" ? "AP" : "CG";
    return generarIdentidadAvion(prefix);
  }

  protected construirAvion(familia: FamiliaAvion, tamano: TamanoAvion): Avion {
    const identity = this.crearIdentidad(familia);

    if (familia === "comercial") {
      return new AvionComercialBuilder(identity, tamano).build();
    }

    if (familia === "militar") {
      return new AvionMilitarBuilder(identity, tamano).build();
    }

    return new AvionCargaBuilder(identity, tamano).build();
  }

  public abstract crearAvion(familia: FamiliaAvion): Avion;
}
