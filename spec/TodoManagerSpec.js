describe('할 일 관리', function () {
  var todoManager;

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

  it('할 일 목록을 가져 올 수 있다.', function () {
    var todoList = todoManager.getList();
    expect(todoList.length).toBe(1);
  });

  it('할 일을 완료할 수 있다. done 속성으로는 변경이 불가능하고 makeDone만 완료할 수 있다.', function () {
    var todoList = todoManager.getList();
    var todo = todoList[0];
    todo.done = false;
		expect(todo.done).toBeFalsy();
    todo.makeDone();
    expect(todo.done).toBeTruthy();
  });

  it('남은 할 일을 알 수 있다.', function () {
    todoManager.addTodo('놀기');
    todoManager.leftTodo = 100;
    expect(todoManager.leftTodo).toBe(1);
  });

});
