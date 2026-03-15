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
    "domain/factories/factory-method/FabricaAvionPequeno.ts",
  );
  const abstractFactorySource = readProjectFile(
    "domain/factories/abstract-factory/FabricaAvionesComerciales.ts",
  );

  return [
    {
      title: "Uso de Factory Method (fabrica concreta)",
      description:
        "La fabrica concreta por tamano decide que avion instanciar segun familia.",
      filePath: "domain/factories/factory-method/FabricaAvionPequeno.ts",
      code: factoryMethodSource.trim(),
    },
    {
      title: "Uso de Abstract Factory (familia concreta)",
      description:
        "La fabrica de familia comercial crea variantes pequeno, mediano y grande coherentes.",
      filePath: "domain/factories/abstract-factory/FabricaAvionesComerciales.ts",
      code: abstractFactorySource.trim(),
    },
    {
      title: "Selector de patron en tiempo de ejecucion",
      description:
        "Aqui se ve exactamente donde se decide entre Factory Method y Abstract Factory.",
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
