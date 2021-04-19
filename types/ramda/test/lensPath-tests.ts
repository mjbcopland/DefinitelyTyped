import * as R from 'ramda';

() => {
  interface ObjWithPhrase {
    phrase: string;
  }

  interface ObjWithNumber {
    123: number
  }

  const symbol = Symbol()
  interface ObjWithSymbol {
    [symbol]: symbol
  }

  // $ExpectType Lens<ObjWithPhrase, string>
  R.lensPath<ObjWithPhrase>(['phrase']);

  // $ExpectType Lens<ObjWithPhrase, any>
  R.lensPath<ObjWithPhrase>(['phrae']);

  // $ExpectType Lens<ObjWithPhrase, number>
  R.lensPath<ObjWithNumber>([123]);

  // $ExpectType Lens<ObjWithPhrase, symbol>
  R.lensPath<ObjWithSymbol>([symbol]);
};
