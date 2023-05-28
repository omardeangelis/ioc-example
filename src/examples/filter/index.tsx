import { dataToFilter } from "../constants";
import { filter, filterTruthyElement } from "../utils/customFilter";

export const Filter = () => {
  const filteredData = filterTruthyElement(dataToFilter, {
    filterEmptyString: true,
    filterZero: true,
  });

  const filteredData2 = filter(dataToFilter, (item, index, array) => {
    console.log(array[index]);
    return item === 0 || Boolean(item);
  });
  return (
    <div>
      <h2>{JSON.stringify(filteredData)}</h2>
      <h2
        style={{
          color: "green",
        }}
      >
        {JSON.stringify(filteredData2)}
      </h2>
    </div>
  );
};
