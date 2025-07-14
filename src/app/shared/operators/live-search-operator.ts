import { OperatorFunction, debounceTime, distinctUntilChanged, Observable, filter } from 'rxjs';

const DEFAULT_FILTER = (value: string) => value.length >= 3;
const DEFAULT_DEBOUNCE_TIME = 300;
const DEFAULT_DISTINCT_FN = (prev: string, curr: string) => prev === curr;

export function liveSearchOperator<T extends string>(
  filterFn: (value: T) => boolean = DEFAULT_FILTER as (value: T) => boolean,
  debounceTimeFn: number = DEFAULT_DEBOUNCE_TIME,
  distinctFn: (value: T, otherValue: T) => boolean = DEFAULT_DISTINCT_FN as (value: T, otherValue: T) => boolean
): OperatorFunction<T, T> {
  return (source: Observable<T>) =>
    source.pipe(
      filter(filterFn),
      debounceTime(debounceTimeFn),
      distinctUntilChanged(distinctFn)
    );
}