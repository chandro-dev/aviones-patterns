import { AvionBuilderBase } from "@/domain/builders/AvionBuilderBase";
import { AvionIdentidad } from "@/domain/models/AvionBase";
import { TamanoAvion } from "@/domain/types/avionTypes";

const RECETAS_CARGA: Record<
  TamanoAvion,
  { modelo: string; capacidadPasajeros: number; autonomiaKm: number; motores: number; color: string }
> = {
  pequeno: {
    modelo: "CG-14 SwiftFreight",
    capacidadPasajeros: 14,
    autonomiaKm: 4100,
    motores: 2,
    color: "gris carbono",
  },
  mediano: {
    modelo: "CG-70 TitanMover",
    capacidadPasajeros: 32,
    autonomiaKm: 7600,
    motores: 2,
    color: "naranja industrial",
  },
  grande: {
    modelo: "CG-900 MammothLift",
    capacidadPasajeros: 52,
    autonomiaKm: 11200,
    motores: 4,
    color: "grafito mate",
  },
};

export class AvionCargaBuilder extends AvionBuilderBase {
  constructor(identity: AvionIdentidad, tamano: TamanoAvion) {
    const receta = RECETAS_CARGA[tamano];

    super(identity, {
      modelo: receta.modelo,
      capacidadPasajeros: receta.capacidadPasajeros,
      autonomiaKm: receta.autonomiaKm,
      familia: "carga",
      tamano,
      motores: receta.motores,
      color: receta.color,
      estado: "en_tierra",
    });
  }
}

