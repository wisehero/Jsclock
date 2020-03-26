//시간 표시하는 요소 선택
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

// 현재 시각을 얻는 함수
function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

//실행 함수
function init() {
  getTime();
  setInterval(getTime, 1000); //setInterval(함수, 실행간격시간)
}

init();
