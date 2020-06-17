"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildArgsFromString = void 0;
exports.buildArgsFromString = function (cli) {
    var output = {
        root: '',
    };
    var flag = 'root';
    cli
        .split(' ')
        .filter(Boolean)
        .forEach(function (arg) {
        if (arg.indexOf('--') === 0) {
            flag = arg.substr(2) || 'root';
            if (!output[flag])
                output[flag] = '';
            return;
        }
        output[flag] += "" + (output[flag] ? ' ' : '') + arg.trim();
    });
    return output;
};
//# sourceMappingURL=buildArgsFromString.js.map