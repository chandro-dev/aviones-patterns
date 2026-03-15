import { Avion } from "@/domain/interfaces/Avion";
import { PatronCreacional } from "@/domain/types/avionTypes";

export interface RegistroAvion {
  idRegistro: string;
  avion: Avion;
  patron: PatronCreacional;
  creadoEn: string;
  actividad: string[];
}

export type AccionVuelo =
  | "despegar"
  | "aterrizar"
  | "volar"
  | "cargar_combustible"
  | "obtener_info";
