import { AvionBuilderBase } from "@/domain/builders/AvionBuilderBase";
import { AvionIdentidad } from "@/domain/models/AvionBase";
import { TamanoAvion } from "@/domain/types/avionTypes";

const RECETAS_MILITARES: Record<
  TamanoAvion,
  { modelo: string; capacidadPasajeros: number; autonomiaKm: number; motores: number; color: string }
> = {
  pequeno: {
    modelo: "MX-15 Falcon",
    capacidadPasajeros: 2,
    autonomiaKm: 2900,
    motores: 1,
    color: "gris tactico",
  },
  mediano: {
    modelo: "MX-77 Sentinel",
    capacidadPasajeros: 6,
    autonomiaKm: 5200,
    motores: 2,
    color: "negro furtivo",
  },
  grande: {
    modelo: "MX-300 Leviathan",
    capacidadPasajeros: 16,
    autonomiaKm: 8400,
    motores: 4,
    color: "verde militar",
  },
};

export class AvionMilitarBuilder extends AvionBuilderBase {
  constructor(identity: AvionIdentidad, tamano: TamanoAvion) {
    const receta = RECETAS_MILITARES[tamano];

    super(identity, {
      modelo: receta.modelo,
      capacidadPasajeros: receta.capacidadPasajeros,
      autonomiaKm: receta.autonomiaKm,
      familia: "militar",
      tamano,
      motores: receta.motores,
      color: receta.color,
      estado: "en_tierra",
    });
  }
}

