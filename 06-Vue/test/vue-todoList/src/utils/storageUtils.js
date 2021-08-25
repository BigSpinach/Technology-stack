export const saveTodos = (value) => {
  localStorage.setItem('todos_key', JSON.stringify(value))
}


export function getTodos() {
  return JSON.parse(localStorage.getItem('todos_key') || '[]');
}