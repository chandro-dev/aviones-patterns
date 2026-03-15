import { AbstractFactoryAviones } from "@/domain/factories/abstract-factory/AbstractFactoryAviones";
import { Avion } from "@/domain/interfaces/Avion";
import { AvionCargaGrande } from "@/domain/models/AvionCargaGrande";
import { AvionCargaMediano } from "@/domain/models/AvionCargaMediano";
import { AvionCargaPequeno } from "@/domain/models/AvionCargaPequeno";
import { generarIdentidadAvion } from "@/lib/aircraftIdentity";

export class FabricaAvionesCarga implements AbstractFactoryAviones {
  public crearAvionPequeno(): Avion {
    return new AvionCargaPequeno(generarIdentidadAvion("CG"));
  }

  public crearAvionMediano(): Avion {
    return new AvionCargaMediano(generarIdentidadAvion("CG"));
  }

  public crearAvionGrande(): Avion {
    return new AvionCargaGrande(generarIdentidadAvion("CG"));
  }
}
