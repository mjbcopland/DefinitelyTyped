import * as R from 'ramda';

() => {
  const orValue = 11;
  const orValueStr = 'str';
  const symbol = Symbol();
  const testPath = ['x', 0, symbol];
  const testObj = { x: [{ [symbol]: 2, z: 3 }, { [symbol]: 4, z: 5 }] };
  const testObjMiss = { c: { b: 2 } };

  R.pathOr<number>(orValue, testPath, testObj); // => 2
  R.pathOr<number>(orValue, testPath)(testObj); // => 2
  R.pathOr<number>(orValue)(testPath)(testObj); // => 2
  R.pathOr<number>(orValue)(testPath, testObj); // => 2
  R.pathOr<number>(orValue, testPath, testObjMiss); // => 11
  R.pathOr<number | string>(orValueStr, testPath, testObjMiss); // => "str"
};
