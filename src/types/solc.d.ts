declare module "solc" {
  interface ImportCallback {
    import: (path: string) => { contents: string } | { error: string };
    smtSolver: (query: string) => { contents: string } | { error: string };
  }
  export interface SolcCompiler {
    lowlevel: {
      compileSingle(input: string): string;
      compileMulti(input: string, optimize?: number): string;
      compileCallback(input: string): string;
      compileStandard(input: string): string;
    };
    compile(sources: string, findImports: ImportCallback): string;
  }
  export function compile(sources: string, findImports: ImportCallback): string;
  export function loadRemoteVersion(
    version: string,
    callback: (err?: Error, solc?: SolcCompiler) => void
  ): void;
  export function version(): string;
}
