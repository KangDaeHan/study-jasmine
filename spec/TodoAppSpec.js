describe('할 일 관리', function () {
  let todoManager;

  it('생성할 수 있다.', function () {
    todoManager = new TodoManager();
    expect(todoManager).toBeDefined();
  });

  it('할 일을 추가할 수 있다. 할 일은 아직 완료되지 않았다.', function () {
    const newTodo = todoManager.addTodo('자바스크립트 공부');
    expect(newTodo.contents).toBe('자바스크립트 공부');
    expect(newTodo.done).toBeDefined();
    expect(newTodo.done).toBeFalsy();
  });

  it('할 일 목록을 가져올 수 있다.', function () {
    const todoList = todoManager.getList();
    expect(todoList.length).toBe(1);
  });

  it('할 일을 완료할 수 있다. done 속성으로는 변경이 불가능하고 makeDone으로만 완료한다.', function () {
    const todoList = todoManager.getList();
    const todo = todoList[0];
    todo.done = true;
    expect(todo.done).toBeFalsy();
    todo.makeDone();
    expect(todo.done).toBeTruthy();
  });


  it('남은 할 일을 leftTodoCount로 알 수 있다. 그리고 leftTodoCount는 변경이 불가능하다.', function () {
    todoManager.addTodo('놀기');
    todoManager.leftCount = 30;
    console.log(todoManager);
    expect(todoManager.leftTodo).toBe(1);
  });

});