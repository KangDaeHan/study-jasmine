function TodoManager(todos) {
  this.todos = [];
  if (todos) {
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      this.addTodo(todo.contents, todo.done);
    }
  }
}

TodoManager.prototype.addTodo = function (contents, done) {
  var newTodo = {
    contents: contents,
    makeDone: function () {
      Object.defineProperty(this, "done", {
        writable: false,
        configurable: true,
        value: true
      });
    },
    toggle: function () {
      Object.defineProperty(this, "done", {
        writable: false,
        configurable: true,
        value: !this.done
      });
    }
  };
  Object.defineProperty(newTodo, "done", {
    writable: false,
    value: done != null ? done : false,
    configurable: true
    // value: false
  });
  this.todos.push(newTodo);
  return newTodo;
};
TodoManager.prototype.getList = function () {
  return this.todos;
};
Object.defineProperty(TodoManager.prototype, "leftTodo", {
  get: function () {
    var leftCount = 0;
    for (var index = 0; index < this.todos.length; index++) {
      var todo = this.todos[index];
      if (todo.done === false) leftCount++;
    }
    return leftCount;
  }
});
