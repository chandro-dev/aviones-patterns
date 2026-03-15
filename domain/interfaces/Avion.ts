import { EstadoAvion, FamiliaAvion, TamanoAvion } from "@/domain/types/avionTypes";

export interface Avion {
  readonly id: string;
  readonly codigoVuelo: string;
  readonly nombreModelo: string;
  readonly familia: FamiliaAvion;
  readonly tamano: TamanoAvion;
  readonly capacidad: string;
  readonly autonomiaKm: number;
  get estado(): EstadoAvion;
  get combustible(): number;
  despegar(): string;
  aterrizar(): string;
  volar(): string;
  cargarCombustible(): string;
  obtenerInformacion(): string;
}
