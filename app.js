//const loginFrom = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

prompt("MODIFIED");
function onLoginBtnClick() {
  ///console.dir(loginInput);
  console.log("Hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);
