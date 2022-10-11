const nextElementInList = (list, value) => {
  const currentActionIndex = list.indexOf(value); //0
  const nextValueIndex = (currentActionIndex + 1) % list.length; // 2 % 4
  const nextValue = list[nextValueIndex];
  return nextValue
};
export default nextElementInList;