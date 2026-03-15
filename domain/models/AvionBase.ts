import { Avion } from "@/domain/interfaces/Avion";
import { EstadoAvion, FamiliaAvion, TamanoAvion } from "@/domain/types/avionTypes";

export interface AvionIdentidad {
  id: string;
  codigoVuelo: string;
}

interface AvionConfig extends AvionIdentidad {
  nombreModelo: string;
  familia: FamiliaAvion;
  tamano: TamanoAvion;
  capacidad: string;
  autonomiaKm: number;
}

export abstract class AvionBase implements Avion {
  public readonly id: string;
  public readonly codigoVuelo: string;
  public readonly nombreModelo: string;
  public readonly familia: FamiliaAvion;
  public readonly tamano: TamanoAvion;
  public readonly capacidad: string;
  public readonly autonomiaKm: number;

  protected estadoActual: EstadoAvion = "en_tierra";
  protected nivelCombustible = 100;

  constructor(config: AvionConfig) {
    this.id = config.id;
    this.codigoVuelo = config.codigoVuelo;
    this.nombreModelo = config.nombreModelo;
    this.familia = config.familia;
    this.tamano = config.tamano;
    this.capacidad = config.capacidad;
    this.autonomiaKm = config.autonomiaKm;
  }

  public get estado(): EstadoAvion {
    return this.estadoActual;
  }

  public get combustible(): number {
    return this.nivelCombustible;
  }

  protected consumirCombustible(value: number): void {
    this.nivelCombustible = Math.max(0, this.nivelCombustible - value);
  }

  protected recargarCombustible(value: number): void {
    this.nivelCombustible = Math.min(100, this.nivelCombustible + value);
  }

  public despegar(): string {
    if (this.estadoActual === "en_vuelo") {
      return `${this.codigoVuelo} ya se encuentra en vuelo.`;
    }

    if (this.nivelCombustible < 20) {
      return `${this.codigoVuelo} no puede despegar. Combustible insuficiente.`;
    }

    this.estadoActual = "despegando";
    this.consumirCombustible(12);
    this.estadoActual = "en_vuelo";
    return `${this.codigoVuelo} despego correctamente y esta en vuelo.`;
  }

  public aterrizar(): string {
    if (this.estadoActual !== "en_vuelo" && this.estadoActual !== "despegando") {
      return `${this.codigoVuelo} no puede aterrizar porque no esta volando.`;
    }

    this.estadoActual = "aterrizando";
    this.consumirCombustible(8);
    this.estadoActual = "en_tierra";
    return `${this.codigoVuelo} aterrizo y regreso a tierra.`;
  }

  public volar(): string {
    if (this.estadoActual !== "en_vuelo") {
      return `${this.codigoVuelo} debe despegar antes de volar en crucero.`;
    }

    if (this.nivelCombustible < 15) {
      return `${this.codigoVuelo} no puede mantener vuelo. Requiere repostaje.`;
    }

    this.consumirCombustible(16);
    return `${this.codigoVuelo} mantiene vuelo de crucero. Combustible: ${this.nivelCombustible}%.`;
  }

  public cargarCombustible(): string {
    if (this.estadoActual === "en_vuelo") {
      return `${this.codigoVuelo} no puede repostar en vuelo.`;
    }

    this.estadoActual = "repostando";
    this.recargarCombustible(35);
    this.estadoActual = "en_tierra";
    return `${this.codigoVuelo} completo carga de combustible. Nivel: ${this.nivelCombustible}%.`;
  }

  public obtenerInformacion(): string {
    return `${this.codigoVuelo} | ${this.nombreModelo} | ${this.capacidad} | autonomia ${this.autonomiaKm} KM`;
  }
}
