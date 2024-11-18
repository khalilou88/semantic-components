export type MemoizeableFunction = (param: any) => any;

export function memoize<
  MemoizedFunction extends MemoizeableFunction,
  MemoizedParameter extends Parameters<MemoizedFunction>[0],
  MemoizedReturnType extends ReturnType<MemoizedFunction>,
>(memoizedFunction: MemoizedFunction) {
  const cache = new Map<MemoizedParameter, MemoizedReturnType>();

  return (memoizedParameter: MemoizedParameter) => {
    if (cache.has(memoizedParameter)) {
      return cache.get(memoizedParameter)!;
    } else {
      const result = memoizedFunction(memoizedParameter) as MemoizedReturnType;
      cache.set(memoizedParameter, result);
      return result;
    }
  };
}
