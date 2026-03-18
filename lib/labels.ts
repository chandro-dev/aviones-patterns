import { EstadoAvion, FamiliaAvion, PatronCreacional, TamanoAvion } from "@/domain/types/avionTypes";

export const patronLabels: Record<PatronCreacional, string> = {
  factory_method: "Factory Method",
  abstract_factory: "Abstract Factory",
};

export const familiaLabels: Record<FamiliaAvion, string> = {
  comercial: "Comercial",
  carga: "Carga",
  militar: "Militar"
};

export const tamanoLabels: Record<TamanoAvion, string> = {
  pequeno: "Small (S)",
  mediano: "Medium (M)",
  grande: "Large (L)",
};

export const estadoLabels: Record<EstadoAvion, string> = {
  en_tierra: "En Tierra",
  despegando: "Despegando",
  en_vuelo: "En Vuelo",
  aterrizando: "Aterrizando",
  repostando: "Repostando",
};
