export function getExistingItem() {
  const items = localStorage.getItem("product");
  if (!items) {
    return [];
  } else {
    return JSON.parse(items);
  }
}
