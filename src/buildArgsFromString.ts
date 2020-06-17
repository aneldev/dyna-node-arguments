export interface IDynaNodeArguments {
  root: string;

  [flag: string]: string;
}

export const buildArgsFromString = (cli: string): IDynaNodeArguments => {
  const output: IDynaNodeArguments = {
    root: '',
  };

  let flag = 'root';

  cli
    .split(' ')
    .filter(Boolean)
    .forEach(arg => {
      if (arg.indexOf('--') === 0) {
        flag = arg.substr(2) || 'root';
        if (!output[flag]) output[flag] = '';
        return;
      }
      output[flag] += `${output[flag] ? ' ' : ''}${arg.trim()}`;
    });

  return output;
};
