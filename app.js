const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

//alert("MODIFIED");

loginInput.value = prompt("What is your name?", "name");
const userName = loginInput.value;
function onLoginBtnClick(event) {
  ///console.dir(loginInput);
  //console.log("Hello", loginInput.value);
  event.preventDefault();
  console.log(loginInput.value);
  if (loginInput.value === "") {
    alert("Please write your name");
  } else if (loginInput.value.length > 15) {
    alert("tooo long");
  } else {
    alert("YOUR NAME IS " + loginInput.value);
    console.log("Hello", loginInput.value);
  }
}
function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  alert("clecked!");
}
//loginForm.addEventListener("submit", onLoginBtnClick);
//loginForm.addEventListener("submit", onLoginBtnClick() 넣으면 한번 실행되고 끝난다.);

loginButton.addEventListener("click", onLoginBtnClick);
link.addEventListener("click", handleLinkClick);
