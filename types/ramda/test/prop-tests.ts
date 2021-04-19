import * as R from 'ramda';

() => {
  const x = R.prop('x');
};

() => {
  const x: number = R.prop('x', { x: 100 }); // => 100

  const symbol = Symbol();
  const obj = {
    str: 'string',
    123: 5,
    [symbol]: symbol,
  };

  const strVal: string = R.prop('str', obj); // => 'string'
  const numVal: number = R.prop(123, obj); // => 5
  const symVal: symbol = R.prop(symbol, obj); // Symbol()

  const strValPl: string = R.prop(R.__, obj)('str'); // => 'string'
  const numValPl: number = R.prop(R.__, obj)(123); // => 5
  const symValPl: symbol = R.prop(R.__, obj)(symbol); // => Symbol()

  const strValCur: string = R.prop('str')(obj); // => 'string'
  const numValCur: number = R.prop(123)(obj); // => 5
  const symValCur: symbol = R.prop(symbol)(obj); // => Symbol()
};

() => {
  const strFavorite = R.prop('favoriteLibrary');
  const numFavorite = R.prop(12345);
  const symFavorite = R.prop(Symbol());
};
