const form = document.querySelector(".js-form"), // 쿼리 셀렉터는 첫번째 것만 가져온다
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
// 이름을 입력하고 엔터를 눌렀을 때 새로고침을 막는 함수
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

// 폼에 이름을 입력하게 하는 함수
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

// 이름을 입력한 후 인삿말을 보여주는 함수
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //유저 정보가 있을 경우
    askForName();
  } else {
    //유저 정보가 없는 경우
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}
init();
