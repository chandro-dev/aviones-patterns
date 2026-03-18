import { AbstractFactoryAviones } from "@/domain/factories/abstract-factory/AbstractFactoryAviones";
import { AvionMilitarBuilder } from "@/domain/builders/AvionMilitarBuilder";
import { Avion } from "@/domain/interfaces/Avion";
import { generarIdentidadAvion } from "@/lib/aircraftIdentity";
import { TamanoAvion } from "@/domain/types/avionTypes";

export class FabricaAvionesMilitares implements AbstractFactoryAviones {
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
    return new AvionMilitarBuilder(generarIdentidadAvion("AP"), tamano).setMotores(40).setColor("TETAS").build();
  }
}
