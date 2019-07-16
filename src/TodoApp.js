//타입은 function으로 만들어서 __proto__ 에 연결할수 있게 한다.
function TodoApp(todos) {
  this.todoManager = new TodoManager(todos);
  this.todoContainerEl =
    document.querySelector(".todo-container") ||
    document.body.appendChild(document.createElement("div"));
  this.titleEl = document.querySelector('.title h2') ||
    document.body.appendChild(document.createElement('div'));
  this.plusBtnEl = document.querySelector('.add-todo button');
  this.renderTodo();
  this.bindEvents();
}

TodoApp.prototype.renderTodo = function () {
  this.todoContainerEl.innerHTML = "";
  const todoList = this.todoManager.getList();
  todoList.forEach(function (todo, idx) {
    // console.log(todo);
    const todoEl = this.createToEl(todo, idx);
    this.todoContainerEl.appendChild(todoEl);
  }, this); //this는 내부의 this를 가르키게 한다. this를 삭제하면 전역변수를 가르쳐서 찾지를 못한다.
  this.renderTitle();
};

TodoApp.prototype.renderTitle = function () {
  const now = new Date();
  this.titleEl.innerHTML = now.getMonth() + 1 + "월" +
    now.getDate() + "일" + ' <span class="left-count">('
    + this.todoManager.leftTodo + '개)</span>';
}

TodoApp.prototype.createToEl = function (todo, id) {
  const todoEl = document.createElement("div");
  todoEl.id = "todo-" + id;
  todoEl.innerHTML = `<input type="checkbox" ${todo.done ? "checked" : ""}/><label>${todo.contents}</label>`;
  todoEl.className = "todo";
  return todoEl;
};

TodoApp.prototype.addTodo = function (contents) {
  this.todoManager.addTodo(contents);
  this.renderTodo();
}
TodoApp.prototype.bindEvents = function () {
  if (this.plusBtnEl) {
    // const me = this;
    this.plusBtnEl.addEventListener("click", function (evt) {
      // console.log(evt);
      // console.log(this);
      const textEl = document.querySelector('.add-todo input[type="text"]');
      this.addTodo(textEl.value);
      textEl.value = '';
    }.bind(this)); //bind 함수를 통해 this가 버튼을 가르키게 한다.

    this.todoContainerEl.addEventListener('click', function (event) {
      if (event.target.nodeName === "INPUT" && event.target.parentElement.className === "todo") {
        const todoEl = event.target.parentElement;
        const idx = Number(todoEl.id.replace('todo-', ''));
        // console.log(idx);
        this.todoManager.getList()[idx].toggle();
        this.renderTitle();
      }
    }.bind(this))

  }
}