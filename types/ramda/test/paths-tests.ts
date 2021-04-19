import * as R from 'ramda';

() => {
  const symbol = Symbol();
  R.paths([['a', 'b'], ['p', 0, symbol]], {a: {b: 2}, p: [{[symbol]: 3}]}); // => [2, 3]
  R.paths([['a', 'b'], ['p', 0, symbol]])({a: {b: 2}, p: [{[symbol]: 3}]}); // => [2, 3]

  R.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); // => [2, undefined]
  R.paths([['a', 'b'], ['p', 'r']])({a: {b: 2}, p: [{q: 3}]}); // => [2, undefined]

    R.paths([['thisKeyIsNotThere']], {}); // => [undefined]
    R.paths([['thisKeyIsNotThere']])({}); // => [undefined]
};
