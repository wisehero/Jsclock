//시간 표시하는 요소 선택
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

// 현재 시각을 얻는 함수
function getTime() {
  const date = new Date();
  const minutes = date.getMinutes(); // 여기서 분을 가져오고
  const hours = date.getHours(); // 여기서 시간을 가져온다
  const seconds = date.getSeconds(); // 그 다음 여기서 초를 가져오고
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`; // 조건을 달아 시간을 표현  10보다 작은 것을 두는 이유는 시간 표현 형식을 맞춰주기 위함임.
}

//실행 함수
function init() {
  getTime();
  setInterval(getTime, 1000); //setInterval(함수, 실행간격시간) 여기서는 분 단위로 업데이트해서 실행.
}

init();
