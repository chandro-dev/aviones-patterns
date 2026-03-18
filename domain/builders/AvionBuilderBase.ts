import { Avion } from "@/domain/interfaces/Avion";
import { AvionEnsamblado } from "@/domain/models/AvionEnsamblado";
import { AvionIdentidad } from "@/domain/models/AvionBase";
import { EstadoAvion, FamiliaAvion, TamanoAvion } from "@/domain/types/avionTypes";
import IAvionBuilder from "@/domain/builders/IAvionBuilder";

type BuilderState = {
  modelo: string;
  capacidadPasajeros: number;
  autonomiaKm: number;
  familia: FamiliaAvion;
  tamano: TamanoAvion;
  motores: number;
  color: string;
  estado: EstadoAvion;
};

const ESTADOS_VALIDOS: EstadoAvion[] = [
  "en_tierra",
  "despegando",
  "en_vuelo",
  "aterrizando",
  "repostando",
];

export abstract class AvionBuilderBase implements IAvionBuilder {
  protected readonly identity: AvionIdentidad;
  protected config: BuilderState;
  
  protected constructor(identity: AvionIdentidad, defaults: BuilderState) {
    this.identity = identity;
    this.config = { ...defaults };
  }

  public setModelo(modelo: string): this {
    this.config.modelo = modelo;
    return this;
  }

  public setCapacidadPasajeros(capacidad: number): this {
    this.config.capacidadPasajeros = capacidad;
    return this;
  }

  public setAutonomiaKm(autonomia: number): this {
    this.config.autonomiaKm = autonomia;
    return this;
  }

  public setFamilia(familia: FamiliaAvion): this {
    this.config.familia = familia;
    return this;
  }

  public setTamano(tamano: TamanoAvion): this {
    this.config.tamano = tamano;
    return this;
  }

  public setMotores(motores: number): this {
    this.config.motores = motores;
    return this;
  }

  public setColor(color: string): this {
    this.config.color = color;
    return this;
  }

  public setEstado(estado: string): this {
    this.config.estado = this.sanitizeEstado(estado);
    return this;
  }

  public build(): Avion {
    return new AvionEnsamblado({
      id: this.identity.id,
      codigoVuelo: this.identity.codigoVuelo,
      nombreModelo: this.config.modelo,
      capacidadPasajeros: this.config.capacidadPasajeros,
      autonomiaKm: this.config.autonomiaKm,
      familia: this.config.familia,
      tamano: this.config.tamano,
      motores: this.config.motores,
      color: this.config.color,
      estado: this.config.estado,
    });
  }

  private sanitizeEstado(value: string): EstadoAvion {
    if (ESTADOS_VALIDOS.includes(value as EstadoAvion)) {
      return value as EstadoAvion;
    }

    return "en_tierra";
  }
}

