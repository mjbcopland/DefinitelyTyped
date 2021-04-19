import * as R from 'ramda';

() => {
  const symbol = Symbol();
  const testPath = ['x', 0, symbol];
  const testObj = { x: [{ [symbol]: 2, z: 3 }, { [symbol]: 4, z: 5 }] };

  R.path(testPath, testObj); // => 2
  R.path(testPath)(testObj); // => 2

  R.path(['a', 'b'])({ c: { b: 2 } }); // => undefined
  R.path(['a', 'b'], { c: { b: 2 } }); // => undefined
};
