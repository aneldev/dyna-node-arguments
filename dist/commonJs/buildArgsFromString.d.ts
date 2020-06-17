export interface IDynaNodeArguments {
    root: string;
    [flag: string]: string;
}
export declare const buildArgsFromString: (cli: string) => IDynaNodeArguments;
