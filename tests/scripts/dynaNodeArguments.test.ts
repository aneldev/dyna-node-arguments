import "jest";

import { dynaNodeArguments } from "../../src";

describe('dynaNodeArguments variable', () => {
  it(`Should have the proper value`, () => {
    console.log('process.argv:', process.argv);
    expect(dynaNodeArguments.root.indexOf('/jest')).toBeGreaterThan(0);
    expect(dynaNodeArguments.coverage).not.toBe(undefined);
    expect(dynaNodeArguments.runInBand).not.toBe(undefined);
    expect(dynaNodeArguments["no-cache"]).not.toBe(undefined);
  });
});
