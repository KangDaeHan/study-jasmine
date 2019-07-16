function User() {
  this.loggedIn = false;
}
User.prototype.login = function() {
  this.loggedIn = true;
}