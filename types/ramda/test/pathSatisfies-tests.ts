import * as R from 'ramda';

() => {
  const symbol = Symbol();
  const testPath = ['x', 0, symbol];
  const testObj = { x: [{ [symbol]: 2, z: 3 }, { [symbol]: 4, z: 5 }] };

  const a: boolean = R.pathSatisfies((x: number) => x > 0, testPath, testObj); // => true
  const b: boolean = R.pathSatisfies((x: number) => x > 0, testPath)(testObj); // => true
  const c: boolean = R.pathSatisfies((x: number) => x > 0)(testPath)(testObj); // => true
};
