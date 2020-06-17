"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynaNodeArguments = void 0;
var buildArgsFromString_1 = require("./buildArgsFromString");
exports.dynaNodeArguments = buildArgsFromString_1.buildArgsFromString(process.argv.slice(1).join(' '));
//# sourceMappingURL=index.js.map