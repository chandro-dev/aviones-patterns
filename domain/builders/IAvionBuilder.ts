import { Avion } from "../interfaces/Avion";
import { FamiliaAvion, TamanoAvion } from "../types/avionTypes";

export default interface IAvionBuilder {
  setModelo(modelo: string): this;
  setCapacidadPasajeros(capacidad: number): this;
  setAutonomiaKm(autonomia: number): this;
  setFamilia(familia: FamiliaAvion): this;
  setTamano(tamano: TamanoAvion): this;
  setMotores(motores: number): this;
  setColor(color: string): this;
  setEstado(estado: string): this;
  build(): Avion;
}
