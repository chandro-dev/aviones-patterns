import { AbstractFactoryAviones } from "@/domain/factories/abstract-factory/AbstractFactoryAviones";
import { Avion } from "@/domain/interfaces/Avion";
import { AvionComercialGrande } from "@/domain/models/AvionComercialGrande";
import { AvionComercialMediano } from "@/domain/models/AvionComercialMediano";
import { AvionComercialPequeno } from "@/domain/models/AvionComercialPequeno";
import { generarIdentidadAvion } from "@/lib/aircraftIdentity";

export class FabricaAvionesComerciales implements AbstractFactoryAviones {
  public crearAvionPequeno(): Avion {
    return new AvionComercialPequeno(generarIdentidadAvion("AP"));
  }

  public crearAvionMediano(): Avion {
    return new AvionComercialMediano(generarIdentidadAvion("AP"));
  }

  public crearAvionGrande(): Avion {
    return new AvionComercialGrande(generarIdentidadAvion("AP"));
  }
}
