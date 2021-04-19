import * as R from 'ramda';

() => {
  const symbol = Symbol();
  const testPath = ['x', 0, symbol];
  const testObj = { x: [{ [symbol]: 2, z: 3 }, { [symbol]: 4, z: 5 }] };

  R.assocPath(R.__, 42, testObj)(testPath); // => {x: [{[symbol]: 42, z: 3}, {[symbol]: 4, z: 5}]}
  R.assocPath(testPath, R.__, testObj)(42); // => {x: [{[symbol]: 42, z: 3}, {[symbol]: 4, z: 5}]}
  R.assocPath(testPath, 42, testObj); // => {x: [{[symbol]: 42, z: 3}, {[symbol]: 4, z: 5}]}
  R.assocPath(testPath, 42)(testObj); // => {x: [{[symbol]: 42, z: 3}, {[symbol]: 4, z: 5}]}
  R.assocPath(testPath)(42)(testObj); // => {x: [{[symbol]: 42, z: 3}, {[symbol]: 4, z: 5}]}
  R.assocPath(testPath)(42, testObj); // => {x: [{[symbol]: 42, z: 3}, {[symbol]: 4, z: 5}]}
};
