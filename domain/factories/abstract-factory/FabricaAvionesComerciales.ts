import { AbstractFactoryAviones } from "@/domain/factories/abstract-factory/AbstractFactoryAviones";
import { AvionComercialBuilder } from "@/domain/builders/AvionComercialBuilder";
import { Avion } from "@/domain/interfaces/Avion";
import { TamanoAvion } from "@/domain/types/avionTypes";
import { generarIdentidadAvion } from "@/lib/aircraftIdentity";

export class FabricaAvionesComerciales implements AbstractFactoryAviones {
  public crearAvionPequeno(): Avion {
    return this.crearConBuilder("pequeno");
  }

  public crearAvionMediano(): Avion {
    return this.crearConBuilder("mediano");
  }

  public crearAvionGrande(): Avion {
    return this.crearConBuilder("grande");
  }

  private crearConBuilder(tamano: TamanoAvion): Avion {
    return new AvionComercialBuilder(generarIdentidadAvion("AP"), tamano).build();
  }
}
