import fs from "node:fs";
import path from "node:path";

export type PatternSnippet = {
  title: string;
  description: string;
  filePath: string;
  code: string;
};

function readProjectFile(relativePath: string): string {
  const absolutePath = path.join(process.cwd(), relativePath);
  return fs.readFileSync(absolutePath, "utf-8");
}

function extractBlock(source: string, startToken: string, endToken: string): string {
  const start = source.indexOf(startToken);
  const end = source.indexOf(endToken, start);

  if (start === -1 || end === -1) {
    return source;
  }

  return source.slice(start, end + endToken.length).trim();
}

export function getPatternSnippets(): PatternSnippet[] {
  const selectorSource = readProjectFile("lib/crearAvionConPatron.ts");
  const simSource = readProjectFile("components/simulation/SimulationWorkspace.tsx");
  const factoryMethodSource = readProjectFile(
    "domain/factories/factory-method/FabricaAvion.ts",
  );
  const abstractFactorySource = readProjectFile(
    "domain/factories/abstract-factory/FabricaAvionesComerciales.ts",
  );
  const builderBaseSource = readProjectFile("domain/builders/AvionBuilderBase.ts");

  return [
    {
      title: "Factory Method + Builder (fabrica base)",
      description:
        "La fabrica por tamano delega el ensamblado en builders concretos segun familia.",
      filePath: "domain/factories/factory-method/FabricaAvion.ts",
      code: extractBlock(
        factoryMethodSource,
        "export abstract class FabricaAvion {",
        "public abstract crearAvion(familia: FamiliaAvion): Avion;\n}",
      ),
    },
    {
      title: "Abstract Factory + Builder (familia comercial)",
      description:
        "La fabrica de familia comercial mantiene coherencia y usa builder para cada tamano.",
      filePath: "domain/factories/abstract-factory/FabricaAvionesComerciales.ts",
      code: abstractFactorySource.trim(),
    },
    {
      title: "Builder base (contrato aplicado)",
      description:
        "Implementacion de `IAvionBuilder` con API fluida y `build()` para ensamblar el avion final.",
      filePath: "domain/builders/AvionBuilderBase.ts",
      code: builderBaseSource.trim(),
    },
    {
      title: "Selector de patron en tiempo de ejecucion",
      description:
        "Aqui se decide entre Factory Method y Abstract Factory, ambos con capa Builder debajo.",
      filePath: "lib/crearAvionConPatron.ts",
      code: extractBlock(
        selectorSource,
        "export function crearAvionConPatron(input: CrearAvionInput): Avion {",
        "return familyFactory.crearAvionGrande();\n}",
      ),
    },
    {
      title: "Invocacion desde la vista de simulacion",
      description: "La UI llama al selector para crear el objeto segun la configuracion elegida.",
      filePath: "components/simulation/SimulationWorkspace.tsx",
      code: extractBlock(
        simSource,
        "const crearAvion = () => {",
        "setGlobalLog((prev) => [`[${horaActual()}] ${avion.codigoVuelo} generado en terminal.`, ...prev].slice(0, 14));\n  };",
      ),
    },
  ];
}
