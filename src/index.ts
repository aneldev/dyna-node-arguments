import { buildArgsFromString } from "./buildArgsFromString";

export const dynaNodeArguments = buildArgsFromString(process.argv.slice(1).join(' '));
