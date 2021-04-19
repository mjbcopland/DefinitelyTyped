import * as R from 'ramda';

() => {
  const a1 = R.dissocPath(['a', 'b', 'c'], { a: { b: { c: 42 } } }); // => {a: {b: {}}}
  // optionally specify return type
  const a2 = R.dissocPath<{ a: { b: number } }>(['a', 'b', 'c'], {
    a: { b: { c: 42 } },
  }); // => {a: {b: {}}}
  const a3 = R.dissocPath(['a', 'b', 'c'])({ a: { b: { c: 42 } } }); // => {a: {b: {}}}

  const symbol = Symbol();
  const testPath = ['x', 0, symbol];
  const testObj = { x: [{ [symbol]: 2, z: 3 }, { [symbol]: 4, z: 5 }] };

  R.dissocPath(testPath, testObj); // => {x: [{z: 3}, {[symbol]: 4, z: 5}]}
  R.dissocPath(testPath)(testObj); // => {x: [{z: 3}, {[symbol]: 4, z: 5}]}
};
