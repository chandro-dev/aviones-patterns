import { AvionIdentidad } from "@/domain/models/AvionBase";

let sequence = 52;

export function generarIdentidadAvion(prefix: string): AvionIdentidad {
  sequence += 1;

  const randomCode = Math.floor(100 + Math.random() * 899);

  return {
    id: `${prefix}-${Date.now()}-${sequence}`,
    codigoVuelo: `${prefix}-${randomCode}`,
  };
}
