//const loginFrom = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

alert("MODIFIED");
loginInput.value = prompt("What is your name?", "name");
const userName = loginInput.value;
function onLoginBtnClick() {
  ///console.dir(loginInput);
  //console.log("Hello", loginInput.value);
  if (loginInput.value === "") {
    alert("Please write your name");
  } else if (loginInput.value.length > 15) {
    alert("tooooo long");
  } else {
    alert("YOUR NAME IS " + loginInput.value);
    console.log("Hello", loginInput.value);
  }
}
s;
loginButton.addEventListener("click", onLoginBtnClick);
