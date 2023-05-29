// Facciamo finta funzione filter non esista
// export const filterTruthyElement = <T>(data: T[]) => {
//   const results: T[] = [];
//   for (let i = 0; i < data.length; i++) {
//     const element = data[i];
//     if (element !== null && element !== undefined) {
//       results.push(data[i]);
//     }
//   }
//   return results;
// };

// Aggiungiamo condizioni
export const filterTruthyElement = <T>(
  data: T[],
  {
    fitlerNull = true,
    filterUndefined = true,
    filterEmptyString = false,
    filterZero = false,
  } = {}
) => {
  const results: T[] = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (
      (fitlerNull && element === null) ||
      (filterUndefined && element === undefined) ||
      (filterEmptyString && element === "") ||
      (filterZero && element === 0)
    ) {
      continue;
    }
    results.push(data[i]);
  }
  return results;
};

//IoC example
export const filter = <T>(
  array: T[],
  filterFn: (el: T, i: number, array: T[]) => boolean
) => {
  const results: T[] = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (filterFn(element, i, array)) {
      results.push(array[i]);
    }
  }
  return results;
};
