export function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  console.log("index", index);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export function updateItemOnce(brr, updatedItem) {
  const index = brr.findIndex((item) => item.id === updatedItem.id);
  if (index !== -1) {
    brr[index] = updatedItem;
  }
  return brr;
}
