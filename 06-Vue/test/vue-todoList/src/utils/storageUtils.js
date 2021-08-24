module.exports = {
  //统一暴露
  //存数据
  saveTodos(value) {
    localStorage.setItem('todos_key', JSON.stringify(value));
  },

  //取数据
  getTodos() {
    return JSON.parse(localStorage.getItem('todos_key')||'[]');
  }
}