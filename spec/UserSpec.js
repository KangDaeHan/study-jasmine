describe('User', () => {
  var user = new User();

  it('로그인을 할 수 있다.', () => {
    user.login();
    expect(user.loggedIn).toBe(true);
  });

});