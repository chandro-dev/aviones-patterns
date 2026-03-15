import { AbstractFactoryAviones } from "@/domain/factories/abstract-factory/AbstractFactoryAviones";
import { FabricaAvionesCarga } from "@/domain/factories/abstract-factory/FabricaAvionesCarga";
import { FabricaAvionesComerciales } from "@/domain/factories/abstract-factory/FabricaAvionesComerciales";
import { FabricaAvion } from "@/domain/factories/factory-method/FabricaAvion";
import { FabricaAvionGrande } from "@/domain/factories/factory-method/FabricaAvionGrande";
import { FabricaAvionMediano } from "@/domain/factories/factory-method/FabricaAvionMediano";
import { FabricaAvionPequeno } from "@/domain/factories/factory-method/FabricaAvionPequeno";
import { Avion } from "@/domain/interfaces/Avion";
import { FamiliaAvion, PatronCreacional, TamanoAvion } from "@/domain/types/avionTypes";

interface CrearAvionInput {
  patron: PatronCreacional;
  familia: FamiliaAvion;
  tamano: TamanoAvion;
}

function resolverFactoryMethod(tamano: TamanoAvion): FabricaAvion {
  if (tamano === "pequeno") {
    return new FabricaAvionPequeno();
  }

  if (tamano === "mediano") {
    return new FabricaAvionMediano();
  }

  return new FabricaAvionGrande();
}

function resolverAbstractFactory(familia: FamiliaAvion): AbstractFactoryAviones {
  if (familia === "comercial") {
    return new FabricaAvionesComerciales();
  }

  return new FabricaAvionesCarga();
}

export function crearAvionConPatron(input: CrearAvionInput): Avion {
  if (input.patron === "factory_method") {
    const factory = resolverFactoryMethod(input.tamano);
    return factory.crearAvion(input.familia);
  }

  const familyFactory = resolverAbstractFactory(input.familia);

  if (input.tamano === "pequeno") {
    return familyFactory.crearAvionPequeno();
  }

  if (input.tamano === "mediano") {
    return familyFactory.crearAvionMediano();
  }

  return familyFactory.crearAvionGrande();
}
