export function groupBy<T, K>(
  array: T[],
  keySelector: (item: T) => K
): Map<K, T[]> {
  return array.reduce((map, item) => {
    const key = keySelector(item);
    const group = map.get(key) || [];
    group.push(item);
    return map.set(key, group);
  }, new Map<K, T[]>());
}
