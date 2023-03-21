const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

//alert("MODIFIED");

//loginInput.value = prompt("What is your name?", "name");
//const userName = loginInput.value;
function onLoginBtnClick(event) {
  ///console.dir(loginInput·‚·);
  //console.log("Hello", loginInput.value);
  event.preventDefault();
  console.log(loginInput.value);
  if (loginInput.value === "") {
    //alert("Please write your name");
  } else if (loginInput.value.length > 15) {
    //alert("tooo long");
  } else {
    //alert("YOUR NAME IS " + loginInput.value);
  }
}

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
//string을 반복해서 사용하는 경우에 할 수 있는 것 변수로 만들어줘라. 그러면 오타가 나면 자바스크립트가 찾아준다.
const USERNAME_KEY = "username";

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  alert("clicked!");
}
//loginForm.addEventListener("submit", onLoginBtnClick);
//loginForm.addEventListener("submit", onLoginBtnClick() 넣으면 한번 실행되고 끝난다.);

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = "Hello " + username;
  //prettier-ignore
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  console.log(username);
}
//loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${savedUsername}`;
}
