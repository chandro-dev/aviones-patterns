import { AvionBuilderBase } from "@/domain/builders/AvionBuilderBase";
import { AvionIdentidad } from "@/domain/models/AvionBase";
import { TamanoAvion } from "@/domain/types/avionTypes";

const RECETAS_COMERCIALES: Record<
  TamanoAvion,
  { modelo: string; capacidadPasajeros: number; autonomiaKm: number; motores: number; color: string }
> = {
  pequeno: {
    modelo: "AP-052 Sparrow",
    capacidadPasajeros: 120,
    autonomiaKm: 3800,
    motores: 2,
    color: "blanco perla",
  },
  mediano: {
    modelo: "AP-220 Horizon",
    capacidadPasajeros: 180,
    autonomiaKm: 6200,
    motores: 2,
    color: "gris titanio",
  },
  grande: {
    modelo: "AP-900 Atlas",
    capacidadPasajeros: 320,
    autonomiaKm: 12800,
    motores: 4,
    color: "azul noche",
  },
};

export class AvionComercialBuilder extends AvionBuilderBase {
  constructor(identity: AvionIdentidad, tamano: TamanoAvion) {
    const receta = RECETAS_COMERCIALES[tamano];

    super(identity, {
      modelo: receta.modelo,
      capacidadPasajeros: receta.capacidadPasajeros,
      autonomiaKm: receta.autonomiaKm,
      familia: "comercial",
      tamano,
      motores: receta.motores,
      color: receta.color,
      estado: "en_tierra",
    });
  }
}

