export default function SearchFilter(data, filter, input) {
  let filtered;

  filtered = data.filter((item) => {
    return item[filter].toLowerCase().includes(input.toLowerCase());
  });

  return filtered;
}
