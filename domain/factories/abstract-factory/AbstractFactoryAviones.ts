import { Avion } from "@/domain/interfaces/Avion";

export interface AbstractFactoryAviones {
  crearAvionPequeno(): Avion;
  crearAvionMediano(): Avion;
  crearAvionGrande(): Avion;
}
