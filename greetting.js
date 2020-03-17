const form = document.querySelector(".js-form"), // 쿼리 셀렉터는 첫번째 것만 가져온다
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //유저 정보가 있을 경우
    greeting.classList;
  } else {
    //유저 정보가 없는 경우
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}
init();
