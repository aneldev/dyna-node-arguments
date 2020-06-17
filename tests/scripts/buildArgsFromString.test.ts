import "jest";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 4000;

import { buildArgsFromString } from "../../src/buildArgsFromString";

describe('buildArgsFromString', () => {

  [
    'node build master.ts',
    'node build master.ts --ENV_MODE production',
    'node build master.ts --ENV_MODE production secure',
    'node build master.ts --ENV_MODE production secure --TARGET mobile android',
    'node build master.ts --ENV_MODE production secure -- basics --TARGET mobile android',
    'node build master.ts    --ENV_MODE    production     secure -- basics --TARGET mobile     android',
    'node build master.ts --ENV_MODE production -secure -- -verbose',
  ]
    .forEach(cli => {
      it(`Parse: "${cli}"`, () => {
        expect(buildArgsFromString(cli)).toMatchSnapshot();
      });
    });
});
