declare module "solc" {
  export interface SolcCompiler {
    lowlevel: {
      compileSingle(input: string): string;
      compileMulti(input: string, optimize?: number): string;
      compileCallback(input: string): string;
      compileStandard(input: string): string;
    };
    compile(sources: string, findImports: Function): any;
  }
  export function compile(sources: string, findImports: Function): any;
  export function loadRemoteVersion(
    version: string,
    callback: (err?: Error, solc?: SolcCompiler) => void
  ): void;
  export function version(): string;
}
