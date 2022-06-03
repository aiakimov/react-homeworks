const KEY = "selected items";

export function setToLocalStorage(arr) {
  const jsonArr = JSON.stringify(arr);
  localStorage.setItem(KEY, jsonArr);
}

export function getFromLocalStorage() {
  const arr = localStorage.getItem(KEY);
  return JSON.parse(arr);
}
