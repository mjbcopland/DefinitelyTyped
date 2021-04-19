import * as R from 'ramda';

() => {
  const symbol = Symbol();
  const testPath = ['x', 0, symbol];
  const testObj = { x: [{ [symbol]: 2, z: 3 }, { [symbol]: 4, z: 5 }] };

  R.pathEq(testPath, 2, testObj); // => true
  R.pathEq(testPath, 2)(testObj); // => true
  R.pathEq(testPath)(2)(testObj); // => true
  R.pathEq(testPath)(2, testObj); // => true
};
