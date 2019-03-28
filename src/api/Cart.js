const items = new Map();

export function add(item) {
  if (items.has(item.id)) {
    const item = items.get(item.id);
    item.quantity++;
  } else {
    items.set(item.id, item);
  }
}

export function remove(item) {
  if (items.has(item.id)) {
    const item = items.get(item.id);
    item.quantity > 0 && item.quantity--;
  }
}

export function getItems() {
  const itemsToDelete = items.values().filter(item => item.quantity);
  itemsToDelete.forEach(item => items.delete(item.id));
  return items;
}
